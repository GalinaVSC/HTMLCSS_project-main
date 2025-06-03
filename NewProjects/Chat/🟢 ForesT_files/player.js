$(document).ready(function(){
	var audiomusic = document.createElement("audio");
	audiomusic.preload = "none";
	audiomusic.src = source;
	if(stplay == 1){
		audiomusic.autoplay = true;
	}
	else {
		audiomusic.autoplay = false;
	}
	audiomusic.volume = 0.3;
	
	$("#playbtn").click(function () {
		var checkPlay = $(this).attr("value");
		if(checkPlay == 0){
			audiomusic.play();
			$(this).attr("value", "1");
			$("#control_button").removeClass("fa-play");
			$("#control_button").addClass("fa-pause");
		}
		else if (checkPlay == 1){
			audiomusic.pause();
			$(this).attr("value", "0");
			$("#control_button").removeClass("fa-pause");
			$("#control_button").addClass("fa-play");
		}
		else {
			return false;
		}
	});

	$("#sound_control").click(function () {
		var checkVolume = $(this).attr("value");
		if(checkVolume == 1){
			$("#control_volume").removeClass("fa-volume-off");
			$("#control_volume").addClass("fa-volume-down");
			audiomusic.volume = 0.5;
			$(this).attr("value", "2");
		}
		else if (checkVolume == 2){
			$("#control_volume").removeClass("fa-volume-down");
			$("#control_volume").addClass("fa-volume-up");
			audiomusic.volume = 0.9;
			$(this).attr("value", "3");
		}
		else if (checkVolume == 3){
			$("#control_volume").removeClass("fa-volume-up");
			$("#control_volume").addClass("fa-volume-off");
			audiomusic.volume = 0.2;
			$(this).attr("value", "1");
		}
		else {
			return false;
		}
	});
	
});