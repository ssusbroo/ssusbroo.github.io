
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

