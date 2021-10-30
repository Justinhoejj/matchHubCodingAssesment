from rest_framework import serializers
from questionnaire.models import Questionnaire

# Questionnaire Serializer
class QuestionnaireSerializer(serializers.ModelSerializer):
  class Meta:
    model = Questionnaire
    fields = '__all__'