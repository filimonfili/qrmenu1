from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

class Menutype(models.Model):
      
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

      