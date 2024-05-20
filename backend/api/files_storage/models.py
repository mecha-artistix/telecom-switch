from django.db import models


class Filters(models.Model):
	Tenant = models.CharField(max_length=250)
	ID = models.CharField(max_length=250)
	Type = models.CharField(max_length=250)
	Path = models.CharField(max_length=250)
	Values = models.CharField(max_length=250)
	ActivationInterval = models.CharField(max_length=250)

	def __str__(self):
		return self.Tenant


class RatingPlans(models.Model):
	Id = models.CharField(max_length=250)
	DestinationRatesId = models.CharField(max_length=250)
	TimingTag = models.CharField(max_length=250)
	Weight = models.CharField(max_length=250)

	def __str__(self):
		return self.Id


