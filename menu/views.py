from django.shortcuts import render
from .models import Menutype
# Create your views here.
def home(request):
    menus=Menutype.objects.all()
    return render(request,"index.html",{'menus':menus})
