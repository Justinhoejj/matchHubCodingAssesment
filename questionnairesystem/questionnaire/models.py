from django.db import models

# Create your models here.
class Questionnaire(models.Model):
  name = models.CharField(max_length=100, unique=True)
  favouriteColors = models.CharField(max_length=40)
  programmingLanguage = models.CharField(max_length=10)
  spokenLanguages = models.CharField(max_length=40)
  isWillingToPay = models.BooleanField()
  created_at = models.DateTimeField(auto_now_add=True)