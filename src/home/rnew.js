var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '390',
    width: '440',
    videoId: 'u1zgFlCw8Aw',
    playerVars: {'controls': 0, 'showinfo': 0, 'loop': 0, 'rel' : 0, 'showsearch' : 0, 'enablejsapi' : 1, 'iv_load_policy' : 3,'hd': 1},
    events: {
    //'onReady': loadplaylist,
    //'onStateChange': onPlayerStateChange
    }
  });
}

function playvideo12() {
  if (player) {
    player.playVideo();
  }
}
function pausevideo() {
  if (player) {
    player.stopVideo();
  }
}
function mute_unmute() {
	if (player.isMuted()) {
     	player.unMute();
      var src = $('#controls .mute_unmutevideo a img').attr('src').replace('mute.jpeg','unmute.jpeg');
      $('#controls .mute_unmutevideo a img').attr('src',src);
     	return false;
	}
	else{
		player.mute();
		var src = $('#controls .mute_unmutevideo a img').attr('src').replace('unmute.jpeg','mute.jpeg');
    $('#controls .mute_unmutevideo a img').attr('src',src);
		return false;
		}
}
function toggle_fullscreen() {
  if(player) {
    var videoElement = document.getElementById("player");
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else {
        videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else {
        document.webkitCancelFullScreen();
      }
    }
  }
}
