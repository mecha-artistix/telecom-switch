from django.db import models
from .files_storage.models import *
# Create your models here.
class Rawdata(models.Model):
    name = models.CharField(max_length=256)
    content = models.TextField()