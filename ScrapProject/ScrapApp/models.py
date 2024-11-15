from django.db import models

class Contact(models.Model):
    fname = models.CharField(max_length=15)
    lname = models.CharField(max_length=15)
    email = models.EmailField(max_length=40)
    message = models.TextField(max_length=500)
    
    def __str__(self):
        return self.fname.upper()