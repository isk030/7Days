

from posts.models import Post
from rest_framework import viewsets, permissions
from .serializers import PostSerializer
import logging
from datetime import datetime, timezone


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(expires_at__gte=datetime.now()).order_by('created_at')

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer

