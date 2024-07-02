from blog.models import Post
from blog.api.serializers import PostSerializer

def get_post():
    post = Post.objects.all().values('id','title', 'content', 'author', 'created_at')
    return PostSerializer(post, many=True)

def get_post_by_id(id):
    return Post.objects.filter(id=id).first()

def save_post(data):
    post_serializer = PostSerializer(data=data)
    if post_serializer.is_valid():
        post_serializer.save()
    return post_serializer