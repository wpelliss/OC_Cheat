if (window.location.hostname == "openclassrooms.com")
{
	var videos = document.getElementsByTagName("video");
	for (var i = 0; i < videos.length; i++)
	{
		var video = videos[i];
		video.parentNode.innerHTML = '<aside id="r-3850508" data-claire-element-id="6260283" data-claire-semantic="information" class=""><p id="r-3850507" data-claire-element-id="6260282">' + "<a href=\"" + video.src + "\"> Vidéo originale </a>" + '</p></aside>' + video.parentNode.innerHTML;
	}
}
