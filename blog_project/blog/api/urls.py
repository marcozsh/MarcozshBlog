from django.urls import path
from .api_post import post_api_view, post_api_detail_view

urlpatterns = [
    path('post/', post_api_view, name="post_api_view" ),
    path('post/<id>/', post_api_detail_view, name="post_api_detail_view" ),
    
]