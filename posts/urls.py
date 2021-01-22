from rest_framework import routers
from .api import PostViewSet
"""Router und Implementierung des PostViewSets für entsprechende Route"""
router = routers.DefaultRouter()
router.register('api/posts', PostViewSet, 'posts')

urlpatterns = router.urls