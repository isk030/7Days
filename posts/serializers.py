from rest_framework import serializers

from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        post = Post(
            message=validated_data['message'],
            score=80,
            like_count=1000
        )
        post.save()
        return post

    def update(self, instance, validated_data):
        instance.like_count = validated_data.get('like_count', instance.like_count)
        instance.fail_count = validated_data.get('fail_count', instance.fail_count)
        instance.save()
        return instance
