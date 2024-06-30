from django.shortcuts import render
from .models import Menutype, Specialoffer

def home(request):
    menus = Menutype.objects.all()
    special_offers = Specialoffer.objects.all()
    return render(request, "index.html", {'menus': menus, 'special_offers': special_offers})
