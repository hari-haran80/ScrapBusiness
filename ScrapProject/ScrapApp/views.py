from django.shortcuts import render
from .models import Contact
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings

def Home(request):
    return render(request, 'index.html')

def Contacts(request):
    
    contact = None
    
    if request.method == 'POST':

        contact = Contact(
            fname=request.POST['fname'],
            lname=request.POST['lname'],
            email=request.POST['email'],
            message=request.POST['message']
        )
        contact.save()
        
        OwnerEmail = 'hariharan.a6998@gmail.com'
        ContentMessage = request.POST['message']
        send_mail(
            'New Message from ' + request.POST['fname'] + ' ' + request.POST['lname'],
            ContentMessage,
            settings.EMAIL_HOST_USER,
            [OwnerEmail],
            fail_silently=False
        )
        
        email = request.POST['email']
        message = "Thanks for reaching out! We've received your message and will get back to you shortly"
        send_mail(
            'Contact Form Submission',
            message,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False
        )
        messages.success(request, "Message has been sent successfully")

    return render(request, 'contact.html', {"contact": contact})


def AboutUs(request):
    return render (request, 'aboutUs.html')

def Galary(request):
    return render (request, 'contact.html')

def Service(request):
    return render (request, 'Service.html')

def Metals(request):
    return render (request, 'metals.html')
    
def Plastic(request):
    return render (request, 'plastic.html')
    
def Papper(request):
    return render (request, 'papers.html')
    
def Bottles(request):
    return render (request, 'bottles.html')