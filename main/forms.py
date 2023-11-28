from django import forms


class VideoForm(forms.Form):
    video_url = forms.URLField(label='Video URL')
