var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var mousePressed = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 3;
context.lineWidth = radius*2;

var draw = function(e){
	if (mousePressed){
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();
		context.beginPath();
		context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.offsetX, e.offsetY);
	}
};

var engage = function(e){
	mousePressed = true;
	draw(e);
};

var disengage = function() {
	mousePressed = false;
	context.beginPath();
};

canvas.addEventListener("mouseup", disengage);
canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", draw);