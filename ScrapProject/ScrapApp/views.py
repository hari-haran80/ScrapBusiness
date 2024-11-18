from django.shortcuts import render
from .models import Contact
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

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
            'New Message from Customer - ' + request.POST['fname'],
            ContentMessage,
            settings.EMAIL_HOST_USER,
            [OwnerEmail],
            fail_silently=False
        )
        
        email = request.POST['email']

        html_content = render_to_string('EmailTamplate.html', {
            'email': email,
            'fname' : request.POST['fname'],
            'lname' : request.POST['lname'],
            'message' : request.POST['message']
        })

        subject = 'Thank You for Contacting Famous Scrap'
        from_email = settings.EMAIL_HOST_USER
        to_email = [email]

        email_message = EmailMultiAlternatives(subject, '', from_email, to_email)
        email_message.attach_alternative(html_content, "text/html")
        email_message.send()

        messages.success(request, "Message has been sent successfully")

        return render(request, 'contact.html')

    return render(request, 'contact.html')


def AboutUs(request):
    return render (request, 'aboutUs.html')

def Galary(request):
    return render (request, 'gallery.html')

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

def custom_page_not_found(request, exception):
    return render(request, 'pageNotFound.html', status=404)