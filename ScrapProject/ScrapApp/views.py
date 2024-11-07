from django.shortcuts import render

def Home(request):
    return render(request, 'index.html')

def Contact(request):
    return render (request, 'contact.html')

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