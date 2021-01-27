import random
from math import floor

from faker import Faker
from googleapiclient import discovery
from rest_framework import serializers
from rest_framework.permissions import AllowAny

import posts.models as postmodel
from posts.models import Post


def get_rating(text):
    """Abfrage über die Perspective API und Bewertung des Posts"""
    API_KEY = 'AIzaSyBCmhJgahh6JpWeUdtzS8_qC8T3JelJY-c'

    # Generates API client object dynamically based on service name and version.
    service = discovery.build('commentanalyzer', 'v1alpha1', developerKey=API_KEY)

    if text:
        analyze_request = {
            'comment': {'text': text},
            'requestedAttributes': {'TOXICITY': {},
                                    'SEVERE_TOXICITY': {},
                                    'IDENTITY_ATTACK': {},
                                    'INSULT': {},
                                    'PROFANITY': {},
                                    'THREAT': {},
                                    }
        }

        response = service.comments().analyze(body=analyze_request).execute()
        return response.get('attributeScores').get('TOXICITY').get('summaryScore').get('value')


def calc_last_days(score, fail_index):
    """Todestag des Posts wird hier anhand von Fail_index und score berechnet"""
    return floor((0.95 - ((score + fail_index) / 2)) * 8)


class PostSerializer(serializers.ModelSerializer):
    """Post Serializer, der als Controller fungiert und Post Objekte umwandelt, abspeichert und aktualisiert."""
    permission_classes = [AllowAny]

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        """Überschreibung der Create Methode. Wenn neune Posts erstellen werden, werden Informationen hier eingetragen"""
        post = Post(
            message=validated_data['message'],
            fake_name=Faker('de_DE').first_name_nonbinary(),
            fake_avatar='https://i.pravatar.cc/125?img=' + str(random.randint(0, 40)),
            fake_location=Faker('de_DE').city(),

        )
        post.save()
        return post

    def update(self, instance, validated_data):
        """ Methode, wenn ein Objekt aktualisert wird. Hier werden Likes und Fails in die Datenbank zusammen mit dem Score eingetragen."""
        if instance.like_count == 0 and instance.fail_count == 0:
            try:
                score = get_rating(instance.message)
            except Exception:
                score = 2
            instance.score = score
        instance.like_count = validated_data.get('like_count', instance.like_count)
        instance.fail_count = validated_data.get('fail_count', instance.fail_count)

        if instance.like_count != 0 and instance.fail_count != 0:
            instance.fail_index = (instance.fail_count / (instance.fail_count + instance.like_count))
        elif instance.like_count == 0 and instance.fail_count != 0:
            instance.fail_index = 0.8
        else:
            instance.fail_index = 0.0

        instance.last_days = calc_last_days(float(instance.score), float(instance.fail_index))

        instance.expires_at = postmodel.get_mod_time(float(instance.last_days))

        instance.save()
        return instance
