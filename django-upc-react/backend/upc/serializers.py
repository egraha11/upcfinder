from rest_framework import serializers
from .models import UPC
import sys


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UPC
        fields = ('upc', 'name', 'brand')