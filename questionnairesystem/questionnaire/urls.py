from rest_framework import routers
from .api import QuestionnaireViewSet

router = routers.DefaultRouter()
router.register('api/questionnaire', QuestionnaireViewSet, 'questionnaire')

urlpatterns = router.urls