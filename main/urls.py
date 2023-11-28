from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import download_video

urlpatterns = [
    path('', download_video, name='download_video')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)