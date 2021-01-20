from datetime import timedelta
from decimal import Decimal

import pytz
from django.db import models

# Create your models here.
from django.utils import timezone
from django.utils.datetime_safe import datetime


def get_mod_time(days):
    value = timezone.now() + timezone.timedelta(days=days)
    return value

class Post(models.Model):
    message = models.TextField(max_length=500, blank=True, unique=True)
    score = models.DecimalField(default=0, decimal_places=2, max_digits=5)
    created_at = models.DateTimeField(auto_now_add=True)
    fake_name = models.TextField(max_length=50, default="John Doe")
    fake_avatar = models.TextField(max_length=500, blank=True)
    fake_location = models.TextField(max_length=500, blank=True)
    expires_at = models.DateTimeField(default=get_mod_time(7))
    last_days = models.IntegerField(default=7)
    like_count = models.IntegerField(default=0.0)
    fail_count = models.IntegerField(default=0.0)
    fail_index = models.DecimalField(default=0.0, decimal_places=2, max_digits=5)



