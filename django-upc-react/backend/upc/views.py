from django.shortcuts import render
from rest_framework import viewsets
from .models import UPC
from .serializers import UpcSerializer




# Create your views here.

class UPCView(viewsets.ModelViewSet):
    serializer_class = UpcSerializer
    queryset = UPC.objects.all()