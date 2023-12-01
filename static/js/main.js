function downloadVideo() {
    const videoPath = document.getElementById('videoPath').value;

    $.ajax({
        type: 'POST',
        url: '',
        data: {videoPath: videoPath},
        success: function (response) {
            if (response.success) {
                alert('Видео успешно сохранения');
            } else {
                alert('Ошибка скачивания видео: ' + response.error_message);
            }
        },
        error: function () {
            alert('Ошибка запроса');
        }
    });
}


function watchVideo() {
    const videoUrl = document.getElementById('videoUrl').value;

    if (!videoUrl) {
        alert('Введите URL видео');
        return;
    }

    const videoId = getVideoId(videoUrl);
    if (!videoId) {
        alert('Некорректный URL видео');
        return;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('src', embedUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');

    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть видео';
    closeButton.classList.add('closeButton');
    closeButton.addEventListener('click', function () {
        videoContainer.innerHTML = '';
    });
    videoContainer.appendChild(closeButton);
}

function getVideoId(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match && match[1] ? match[1] : null;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const input = document.input;
    input.classList.toggle('dark-theme');
    const button = document.button;
    button.classList.toggle('dark-theme');
}
