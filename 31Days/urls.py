from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('', include('31Days.frontend.urls')),
    path('', include('posts.urls')),
    path('admin/', admin.site.urls)
]
