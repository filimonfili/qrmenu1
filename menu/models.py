from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

class Menutype(models.Model):
      
      category=models.CharField(max_length=20)
      name=models.CharField(max_length=100) 
      img=models.ImageField(upload_to='pics')
      

      desc=models.TextField()
      descd=models.TextField()
      persons=models.IntegerField()
      materialsgram=models.IntegerField()
      materialsgram1=models.IntegerField()
      materialsgram2=models.IntegerField()

      
      materialsname=models.TextField()
      materialsname1=models.TextField()
      materialsname2=models.TextField()

      time=models.IntegerField()
      price=models.IntegerField()
class Specialoffer(models.Model):
      special_image=models.ImageField()
      special_name=models.CharField(max_length=10)
      special_desc=models.TextField()
      special_discount=models.IntegerField()
      special_price=models.IntegerField()
