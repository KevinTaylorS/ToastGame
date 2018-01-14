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


var context = canvas.getContext("2d");

var mousePressed = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 5;
brushSize.innerHTML = radius;
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

canvas.addEventListener("touchend", disengage);
canvas.addEventListener("touchstart", engage);
canvas.addEventListener("touchmove", draw);

function setBrushSize(newBrushSize){
	if (newBrushSize > 20){
		newBrushSize = 20;
	}
	if (newBrushSize < 1){
		newBrushSize = 1;
	}
	radius = newBrushSize;
	context.lineWidth = radius*2;
	brushSize.innerHTML = newBrushSize;
}

brushSizeUp.addEventListener("click", function(){
	setBrushSize(radius + 1);
});
brushSizeDown.addEventListener("click", function(){
	setBrushSize(radius - 1);
});

palleteBlack.addEventListener("click", function(){
	context.strokeStyle = "black";
	context.fillStyle = "black";
});
palleteWhite.addEventListener("click", function(){
	context.strokeStyle = "white";
	context.fillStyle = "white";
});
palleteRed.addEventListener("click", function(){
	context.strokeStyle = "red";
	context.fillStyle = "red";
});
palleteOrange.addEventListener("click", function(){
	context.strokeStyle = "orange";
	context.fillStyle = "orange";
});
palleteYellow.addEventListener("click", function(){
	context.strokeStyle = "yellow";
	context.fillStyle = "yellow";
});
palleteGreen.addEventListener("click", function(){
	context.strokeStyle = "green";
	context.fillStyle = "green";
});
palleteBlue.addEventListener("click", function(){
	context.strokeStyle = "blue";
	context.fillStyle = "blue";
});
palletePurple.addEventListener("click", function(){
	context.strokeStyle = "purple";
	context.fillStyle = "purple";
});


console.log("text");