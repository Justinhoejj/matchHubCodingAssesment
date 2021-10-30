from questionnaire.models import Questionnaire
from rest_framework import viewsets, permissions
from .serializers import QuestionnaireSerializer

# Questionnaire Viewset
class QuestionnaireViewSet(viewsets.ModelViewSet):
  queryset = Questionnaire.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]

  serializer_class = QuestionnaireSerializer