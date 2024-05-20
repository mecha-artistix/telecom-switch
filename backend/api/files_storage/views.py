from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response


class FiltersViewSet(viewsets.ModelViewSet):
	queryset = Filters.objects.all()
	serializer_class = FiltersSerializer


class RatingPlansViewSet(viewsets.ModelViewSet):
	queryset = RatingPlans.objects.all()
	serializer_class = RatingPlansSerializer


