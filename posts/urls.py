from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/posts', LeadViewSet, 'posts')

urlpatterns = router.urls