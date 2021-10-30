from django.db import models

# Create your models here.
class Questionnaire(models.Model):
  name = models.CharField(max_length=100, unique=True)
  
  class FavouriteColor(models.IntegerChoices):
    BLUE = 1
    RED = 2
    GREEN = 3
    YELLOW = 4
    PURPLE = 5
    PINK = 6
  favouriteColor = models.IntegerField(choices=FavouriteColor.choices)
  class FamiliarCodingLanguages(models.IntegerChoices):
    PYTHON = 7
    JAVA = 8
    RUBY = 9
    JAVASCRIPT = 10
    GOLANG = 11
  familiarCodingLanguages = models.IntegerField(choices=FamiliarCodingLanguages.choices)
  class SpokenLanguages(models.IntegerChoices):
    ENGLISH = 12
    CHINESE = 13
    MALAY = 14
    TAMIL = 15
    HINDI = 16
  spokenLanguages = models.IntegerField(choices=SpokenLanguages.choices)
  isWillingToPay = models.BooleanField()
  created_at = models.DateTimeField(auto_now_add=True)