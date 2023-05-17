from django.urls import path
from . import views

urlpatterns = [
    path('cat-info', views.CatInfoView.as_view()),
    path('cat-info-search', views.CatInfoSearchView.as_view()),
    path('teste', views.TesteView.as_view()),
]
