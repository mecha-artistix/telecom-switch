from django.shortcuts import HttpResponse


def home(request):
    return HttpResponse("<h1 style='text-align:center;font-size:64px;'>DJANGOOOO!!!!!</h1>")