import json

from sys import path

from django.contrib import admin
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Avg, Count
from django.db.models.functions import TruncDay
from django.http import JsonResponse

from .models import Post

# size = Post.objects.all().count()
# # Register your models here.
# class PostsAdmin(admin.ModelAdmin):
#     list_display =('id','message', 'score', 'fail_index', 'created_at', 'expires_at')
#     list_filter = ('expires_at','created_at')
#     ordering = ("-created_at",)
#     change_list_template = 'admin/change_list.html'
#     list_display_links = ('id', 'message')
#     search_fields = ('message',)
#     list_per_page = 25
#
#     def changelist_view(self, request, extra_context=None):
#
#         # Aggregate new subscribers per day
#         chart_data = Post.objects.filter(score__gte=0.2).values("score")
#
#         for item in chart_data:
#             item["data"]=Post.objects.all().count()
#
#
#         # Serialize and attach the chart data to the template context
#         as_json = json.dumps(list(chart_data), cls=DjangoJSONEncoder)
#         extra_context = extra_context or {"chart_data": as_json}
#         print(extra_context)
#
#         # Call the superclass changelist_view to render the page
#         return super().changelist_view(request, extra_context=extra_context)
#
#
# admin.site.register(Post, PostsAdmin)
