
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('31Days.frontend.urls')),
    path('', include('posts.urls')),
]
