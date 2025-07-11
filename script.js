
function fsRandomVideo() {
    const videos = document.querySelectorAll('video');
    if (videos.length === 0) {
        console.warn('No video elements found on the page.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    // Play the video (optional)
    if (randomVideo.paused) {
        randomVideo.play().catch(err => {
            console.warn('Could not auto-play the video:', err);
        });
    }

    // Request fullscreen
    if (randomVideo.requestFullscreen) {
        randomVideo.requestFullscreen();
    } else if (randomVideo.webkitRequestFullscreen) { // Safari
        randomVideo.webkitRequestFullscreen();
    } else if (randomVideo.msRequestFullscreen) { // IE/Edge
        randomVideo.msRequestFullscreen();
    } else {
        console.warn('Fullscreen API is not supported.');
    }
}

document.querySelectorAll('.click-to-fullscreen').forEach(video => {
  video.addEventListener('click', (e) => {
    // Prevent play/pause
    e.preventDefault();
    e.stopPropagation();

    // Request fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
      }
    }
  });
  
});

