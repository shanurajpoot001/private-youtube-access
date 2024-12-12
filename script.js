document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});
// cSpell:disable-next-line
const attribute = "nodownload";
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    alert("Screenshot detected! This action is not allowed.");
    window.location.href = "error.html"; // Redirect or block access
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
    event.preventDefault();
    alert("Developer tools are not allowed.");
  }
});



const video = document.getElementById('videoPlayer');
video.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

video.addEventListener('mouseover', function() {
  video.setAttribute('controlsList', 'nodownload');
});

video.addEventListener('play', function() {
  video.controlsList = 'nodownload';
});
setInterval(() => {
  if (document.hidden) {
    alert("Screen recording is not allowed on this page.");
    window.location.href = "error.html";
  }
}, 1000);
