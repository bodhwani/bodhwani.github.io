var audio = document.getElementById('background_audio');
var clicked = true;

document.getElementById('mute').addEventListener('click', function (e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    if (clicked) {
    	$(".bar").addClass("noAnim");
    	clicked = false;
  	} else {
    	$(".bar").removeClass("noAnim");
    	clicked = true;
  	}
    e.preventDefault();
}, false);