from django.contrib import admin
from django.urls import path, re_path
from . import views
from django.conf import settings
from django.views.static import serve

urlpatterns = [
    
    # if static not working in DEBUG = FALSE 
    
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.IMAGE_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
    # --------------------------------------------------------------------------------
    
    path('', views.Home, name='Home'),
    path('Home', views.Home, name='Home'),
    
    path('Contact', views.Contacts, name='Contact'),
    path('About-Us', views.AboutUs, name='About-Us'),
    path('Galary', views.Galary, name='Galary'),
        
    path('Service', views.Service, name='Service'),
    path('Metals', views.Metals, name='Metals'),
    path('Plastic', views.Plastic, name='Plastic'),
    path('Papper', views.Papper, name='Papper'),
    path('Bottles', views.Bottles, name='Bottles'),
]
