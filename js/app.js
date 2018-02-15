var home = document.querySelector('.home'),
	screen = document.querySelector('.screen'),
	point = document.querySelector('.point'),
	point2 = document.querySelector('.point2');

home.addEventListener('click', function() {
	screen.classList.toggle('active');
})
point2.addEventListener('click', function() {
	screen.classList.add('second');
	point.style.background = "#808080";
	point2.style.background = "#fff";
})

point.addEventListener('click', function() {
	screen.classList.remove('second');
	point2.style.background = "#808080";
	point.style.background = "#fff";
})

function clock(){
	var date = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var month =
	["January","February","March","April","May","June","July","August","September","October","November","December"];
	var hour = date.getHours();
	if (hour<10) hour = "0"+hour;

	var minute = date.getMinutes();
	if (minute<10) minute = "0"+minute;

	document.querySelector(".clock").innerHTML = hour + ":" + minute;
	document.querySelector(".date").innerHTML = days[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()];

	setTimeout("clock()",1000);
}

window.addEventListener("load", clock);