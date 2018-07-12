function slide(){
	x = (x === images.length - 1) ? 0: x + 1;
	document.getElementById("mainshot").src = images[x];
}

function startTimer() {
	setInterval(slide, 2000);
}

var images = [], x = -1;
images[0] = "surfex1.jpg";
images[1] = "surfex2.jpg";
images[2] = "surfex3.jpg";

