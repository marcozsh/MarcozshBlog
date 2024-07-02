from rest_framework import status
from rest_framework.response import Response
from blog.api.serializers import PostSerializer
from rest_framework.decorators import api_view
from blog.api.functions import save_post, get_post, get_post_by_id


@api_view(['GET', 'POST'])
def post_api_view(request):
    if request.method == 'GET':
        return Response(get_post().data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':
        post_serializer = save_post(request.data)
        if post_serializer:
            return Response(post_serializer.data, status=status.HTTP_201_CREATED)
        return Response(post_serializer.erros, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def post_api_detail_view(request, id):
    post = get_post_by_id(id)
    if post:
        post_serializer = PostSerializer(post)
        return Response(post_serializer.data, status=status.HTTP_200_OK)
    
    return Response({"detail":"No se encunetra el post"}, status=status.HTTP_404_NOT_FOUND)