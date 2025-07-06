from django.shortcuts import render
from.serializers import Userserial
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

class Resigsterview(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserial
    permission_classes = [AllowAny]


