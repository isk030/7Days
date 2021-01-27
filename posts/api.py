

from posts.models import Post
from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from datetime import datetime, timezone


class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = Post.objects.filter(expires_at__gte=datetime.now()).order_by('created_at')
    serializer_class = PostSerializer

