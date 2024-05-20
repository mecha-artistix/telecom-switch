from rest_framework import serializers
from .models import *

class RawdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rawdata
        fields = '__all__'