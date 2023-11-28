from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from pytube import YouTube
import os
from django.conf import settings
import re


@csrf_exempt
def download_video(request):
    if request.method == 'POST':
        video_url = request.POST.get('videoPath')
        try:
            yt = YouTube(video_url)
            video = yt.streams.get_highest_resolution()
            cleaned_title = re.sub(r'[<>:"/\\|?*]', '_', yt.title)
            filename = f"{cleaned_title}.mp4"
            filepath = os.path.join(settings.MEDIA_ROOT, 'download', filename)
            video.download(filepath)
            return JsonResponse({'success': True, 'filename': filename})
        except Exception as e:
            return JsonResponse({'success': False, 'error_message': str(e)})

    return render(request, 'index.html')




