from django.urls import path, include
from .views import *
urlpatterns = [
    path('',RawdataView.as_view(), name='rawdata'),
    path('file/', file_upload_view, name='file-upload'),
    path('api-form', form_api),
    path('csv/', include('api.files_storage.urls'))
]