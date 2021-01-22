from django.shortcuts import render

# Create your views here.
def index(request):
    """Weiterleitung zur Index.html im React Frontend"""
    return render(request, './frontend/index.html')