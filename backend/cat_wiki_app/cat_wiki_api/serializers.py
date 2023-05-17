from rest_framework import serializers
from .models import CatInfo, Teste


class CatInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatInfo
        fields = '__all__'


class TesteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teste
        fields = '__all__'
