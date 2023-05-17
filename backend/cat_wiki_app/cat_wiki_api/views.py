from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.http import HttpResponse


from .serializers import CatInfoSerializer, TesteSerializer
from .models import CatInfo, Teste
# Create your views here.


class CatInfoView(APIView):
    def get(self, request):
        model = CatInfo.objects.all()
        serializer = CatInfoSerializer(model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CatInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse('tudo certo')


class CatInfoSearchView(APIView):
    def get(self, request):
        id = self.request.query_params.get('id')
        name = self.request.query_params.get('name')

        if id:
            model = CatInfo.objects.filter(id=id)
            serializer = CatInfoSerializer(model, many=True)
            return Response(serializer.data)

        if name:
            model = CatInfo.objects.filter(name__icontains=name)
            serializer = CatInfoSerializer(model, many=True)
            return Response(serializer.data)


class TesteView(APIView):
    def post(self, request):
        img = request.data.get('img')

        serializer = TesteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse('tudo certo')
