from rest_framework import serializers

from posts.models import Post
from faker import Faker
import random
import json
from googleapiclient import discovery


def get_rating(text):
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

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        post = Post(
            message=validated_data['message'],
            fake_name=Faker('de_DE').first_name_nonbinary(),
            fake_avatar='https://i.pravatar.cc/125?img='+str(random.randint(0,40)),
            fake_location=Faker('de_DE').city(),
            score=get_rating(validated_data['message'])
        )
        post.save()
        return post

    def update(self, instance, validated_data):
        instance.like_count = validated_data.get('like_count', instance.like_count)
        instance.fail_count = validated_data.get('fail_count', instance.fail_count)
        instance.save()
        return instance
