$(".toggle-full-screen").click(function () {
  toggleFullScreen();
});

function toggleFullScreen() {
  //   if (document.documentElement.requestFullScreen) {
  //     document.documentElement.requestFullScreen();
  //   } else if (document.documentElement.mozRequestFullScreen) {
  //     document.documentElement.mozRequestFullScreen();
  //   } else if (document.documentElement.webkitRequestFullScreen) {
  //     document.documentElement.webkitRequestFullScreen(
  //       Element.ALLOW_KEYBOARD_INPUT
  //     );
  //   }

  elem = document.documentElement;

  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
