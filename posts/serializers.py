from rest_framework import serializers

from posts.models import Post
from faker import Faker
import random


fake = Faker('de_DE')



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        post = Post(
            message=validated_data['message'],
            fake_name=fake.first_name_nonbinary(),
            fake_avatar='https://i.pravatar.cc/125?img='+str(random.randint(0,70)),
            fake_location=fake.city()
        )
        post.save()
        return post

    def update(self, instance, validated_data):
        instance.like_count = validated_data.get('like_count', instance.like_count)
        instance.fail_count = validated_data.get('fail_count', instance.fail_count)
        instance.save()
        return instance
