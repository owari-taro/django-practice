from .views import BlogDetailView, BlogListView, BlogCreateView
from django.urls import path

urlpatterns = [
    path('post/new/', BlogCreateView.as_view(), name="post_new"),
    path('post/<int:pk>/', BlogDetailView.as_view(), name="post_detail"),
    path("", BlogListView.as_view(), name="home")
]
