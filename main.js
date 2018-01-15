var canvas = document.getElementById("canvas");
var brushSize = document.getElementById("brushSize");
var brushSizeUp = document.getElementById("brushSizeUp");
var brushSizeDown = document.getElementById("brushSizeDown");
var palleteBlack = document.getElementById("black");
var palleteWhite = document.getElementById("white");
var palleteRed = document.getElementById("red");
var palleteOrange = document.getElementById("orange");
var palleteYellow = document.getElementById("yellow");
var palleteGreen = document.getElementById("green");
var palleteBlue = document.getElementById("blue");
var palletePurple = document.getElementById("purple");

//prevent scrolling on mobile
document.body.addEventListener('touchstart', function(e){ 
	e.preventDefault();
});

var context = canvas.getContext("2d");

var mousePressed = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var radius;

function setBrushSize(newBrushSize){
	var min = 5;
	var max = 100;
	if (newBrushSize > max){
		newBrushSize = max;
	}
	if (newBrushSize < min){
		newBrushSize = min;
	}
	radius = newBrushSize;
	context.lineWidth = radius;
	brushSize.style.width = newBrushSize + "px";
	brushSize.style.height = newBrushSize + "px";
}

setBrushSize(10);

var draw = function(e){
	if (mousePressed){
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();
		context.beginPath();
		context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
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

canvas.addEventListener("touchend", disengage);
canvas.addEventListener("touchstart", function(e){ 
	e.preventDefault();
	engage();
});
canvas.addEventListener("touchmove", draw);

brushSizeUp.addEventListener("click", function(){
	setBrushSize(radius + 5);
});
brushSizeDown.addEventListener("click", function(){
	setBrushSize(radius - 5);
});


palleteBlack.addEventListener("click", function(){
	context.strokeStyle = "black";
	context.fillStyle = "black";
	brushSize.style.backgroundColor = "black";
});
palleteWhite.addEventListener("click", function(){
	context.strokeStyle = "white";
	context.fillStyle = "white";
	brushSize.style.backgroundColor = "white";
});
palleteRed.addEventListener("click", function(){
	context.strokeStyle = "red";
	context.fillStyle = "red";
	brushSize.style.backgroundColor = "red";
});
palleteOrange.addEventListener("click", function(){
	context.strokeStyle = "orange";
	context.fillStyle = "orange";
	brushSize.style.backgroundColor = "orange";
});
palleteYellow.addEventListener("click", function(){
	context.strokeStyle = "yellow";
	context.fillStyle = "yellow";
	brushSize.style.backgroundColor = "yellow";
});
palleteGreen.addEventListener("click", function(){
	context.strokeStyle = "green";
	context.fillStyle = "green";
	brushSize.style.backgroundColor = "green";
});
palleteBlue.addEventListener("click", function(){
	context.strokeStyle = "blue";
	context.fillStyle = "blue";
	brushSize.style.backgroundColor = "blue";
});
palletePurple.addEventListener("click", function(){
	context.strokeStyle = "purple";
	context.fillStyle = "purple";
	brushSize.style.backgroundColor = "purple";
});


console.log("text");