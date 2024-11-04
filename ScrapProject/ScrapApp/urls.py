from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',  views.Home, name='Home'),
    path('Home',  views.Home, name='Home'),
    path('Contact', views.Contact, name = 'Contact'),
    path('About-Us', views.AboutUs, name = "About-Us"),
    path('Galary', views.Galary, name = "Galary"),
    path('Service', views.Service, name = "Service"),
]