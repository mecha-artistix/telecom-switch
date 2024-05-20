from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()


router.register(r'filters', FiltersViewSet)
router.register(r'ratingplans', RatingPlansViewSet)

urlpatterns = [path('', include(router.urls))]