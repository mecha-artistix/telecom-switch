from rest_framework import serializers
from .models import *




class FiltersSerializer(serializers.ModelSerializer):
	class Meta:
		model = Filters
		fields = '__all__'
		extra_kwargs = {field: {'allow_null': True, 'required': False} for field in fields}
class RatingPlansSerializer(serializers.ModelSerializer):
	class Meta:
		model = RatingPlans
		fields = '__all__'
		extra_kwargs = {field: {'allow_null': True, 'required': False} for field in fields}