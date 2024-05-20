from django.shortcuts import render
from rest_framework import generics
from django import forms
from .models import *
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.forms.models import model_to_dict

from .files_storage.views import *
# Create your views here.

class FileForm(forms.Form):
    file = forms.FileField()


def file_upload_view(request):
    file_name = ''
    file_content = ''
    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            file_name = file.name
            file_content = file.read().decode('utf-8')
        else:
            form = FileForm()
    else:
        return render(request, 'file_upload.html')
    return render(request, 'file_upload.html', {'file_name': file_name, 'file_content':file_content, 'file_form': form})

class RawdataView(generics.ListCreateAPIView):
    queryset = Rawdata.objects.all()
    serializer_class = RawdataSerializer
    def post(self, request, *args, **kwards):
        if (request.FILES):
            file = request.FILES['file']
            file_name = file.name
            if self.queryset.filter(name=file_name).exists():
                return Response({'message': 'File already exists.'}, status=400)
            file_content = file.read().decode('utf-8')
            serializer = self.get_serializer(data={'name': file_name, 'content': file_content})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({'detail': 'File not provided.'}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        instances = self.get_queryset()  # Retrieve all instances from the queryset
        serializer = self.get_serializer(instances, many=True)
        return Response(serializer.data)



def form_api(request):
    return render(request, 'api_form.html')


