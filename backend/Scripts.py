import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
import django
django.setup()
from django.forms.models import model_to_dict


from api.models import *

import json, os, re

cur = os.path.abspath(__file__)
dir_parent = os.path.dirname(cur)
dir_app = os.path.join(dir_parent, 'api')
dir_files = os.path.join(dir_app, 'files_storage')
file_dump = os.path.join(dir_files, 'dump.txt')
file_models = os.path.join(dir_files, 'models.py')
file_serializers = os.path.join(dir_files, 'serializers.py')
file_views = os.path.join(dir_files, 'views.py')
file_urls = os.path.join(dir_files, 'urls.py')



print(dir_app)
raw_data = Rawdata.objects.all()
serialized_data = json.dumps(list(raw_data.values()))  # Serialize queryset to JSON string




def determine_field_type(value):
    try:
        int(value)
        return 'IntegerField()'
    except ValueError:
        pass
    try:
        float(value)
        return 'FloatField()'
    except ValueError:
        pass
    if value.lower() == 'true' or value.lower() == 'false':
        return 'BooleanField()'
    if re.match(r'\d{4}-\d{2}-\d{2}', value):
        return 'DateField()'
    return 'CharField(max_length=250)'





with open(file_dump, 'w') as dump, open(file_models, 'w') as model, open(file_serializers, 'w') as serializer, open(file_views, 'w') as view, open(file_urls, 'w') as urls:
    model.write('from django.db import models')
    model.write('\n'*3)
    serializer.write('from rest_framework import serializers'+'\n'+'from .models import *'+'\n')
    serializer.write('\n'*3)
    view.write('''from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response''')
    view.write('\n'*3)

    urls.write('''from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()'''+ '\n'*3)
    for i, entry in enumerate(raw_data):
        obj_dict = model_to_dict(entry)  # Convert model instance to dictionary
        name = entry.name.split('.')[0]
        body = re.sub(r'\n\s*\n', '\n', entry.content)
        keys = [re.sub(r'[\[#.*?\.0-9\]]', '', key) for key in body.split('\n')[0].split(',')]
        for key in keys:
            dump.write(key + '\n')
        values = body.split('\n')[1]
        types = []
        for value in values:
            types.append(determine_field_type(value))
        fields = dict(zip(keys, types))
        # dump.write(values)
        print(fields)
        model.write(f'class {name}(models.Model):'+ '\n')
        for key, value in fields.items():
            model.write('\t' +f'{key} = models.{value}' +'\n')
        model.write('\n') 
        model.write('\t'+ 'def __str__(self):'+'\n\t\t')
        return_kw = list(fields.keys())[0]
        model.write( f"return self.{list(fields.keys())[0]}")
        model.write('\n\n\n')

        # WRITE SERIALIZER --------
        serializer.write('\n'+f"class {name}Serializer(serializers.ModelSerializer):"+'\n')
        serializer.write('\tclass Meta:'+'\n')
        serializer.write(f'\t\tmodel = {name}'+'\n')
        serializer.write(f"\t\tfields = '__all__'"+'\n')
        serializer.write(f"\t\textra_kwargs = {{field: {{'allow_null': True, 'required': False}} for field in fields}}")

        # WRITE VIEWS ------
        view.write(f"class {name}ViewSet(viewsets.ModelViewSet):"+'\n')
        view.write('\t'+f"queryset = {name}.objects.all()"+'\n')
        view.write('\t'+f"serializer_class = {name}Serializer" +'\n'*3)


        # WRITE PATTERNS ------
        urls.write(f"router.register(r'{name.lower()}', {name}ViewSet)"+'\n')
        
        i = i + 1
        print("---"*10)
    urls.write('\n'+f"urlpatterns = [path('file/', include(router.urls))]")


