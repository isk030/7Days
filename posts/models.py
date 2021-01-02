import pytz
from django.db import models
from datetime import datetime, timedelta, timezone

# Create your models here.

def get_mod_time(value):
    value = value + timedelta(days=31)
    return value

class Post(models.Model):
    message = models.TextField(max_length=500, blank=True, unique=True)
    score = models.DecimalField(default=0, decimal_places=2, max_digits=5)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(default=get_mod_time(datetime.now(timezone.utc)))
    like_count = models.IntegerField(default=0)
    fail_count = models.IntegerField(default=0)
    like_index = models.DecimalField(default=0, decimal_places=2, max_digits=5)



