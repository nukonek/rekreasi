// JavaScript Document
$(document).ready(function () {
	jQuery('#camera_wrap').camera({
		loader: false,
		pagination: false,
		thumbnails: false,
		minHeight: '666',
		height: '51%',
		navigation: false,
		time: 10000,
		transPeriod: 1000,
		fx: 'simpleFade'
	});
});

$(document).ready(function () {
	$(".menu-icon").click(function () {
		$(".headnav").slideToggle();
	});
});

window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	}
	else {
		header.classList.remove("sticky");
	}
}