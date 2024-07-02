from django.contrib import admin
from .models import Post



class PostAdmind(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    search_fields = ('title', 'author')

admin.site.register(Post, PostAdmind)
