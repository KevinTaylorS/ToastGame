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

//MOUSE DRAWING
//replaced offsetX and offsetY with pageX and pageY
var draw = function(e){
	if (mousePressed){
		context.lineTo(e.pageX, e.pageY);
		context.stroke();
		context.beginPath();
		context.arc(e.pageX, e.pageY, radius/2, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.pageX, e.pageY);
		console.log("mouse drawing");
	}
};

var engage = function(e){
	mousePressed = true;
	draw(e);
	console.log("true");
};

var disengage = function() {
	mousePressed = false;
	context.beginPath();
	console.log("false");
};

canvas.addEventListener("mouseup", disengage);
canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", draw);


//TOUCH DRAWING
var drawTouch = function(e){
	var touchX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
	var touchY = e.touches[0].pageY - e.touches[0].target.offsetTop;
	
	if (mousePressed){
		context.lineTo(touchX, touchY);
		context.stroke();
		context.beginPath();
		context.arc(touchX, touchY, radius/2, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(touchX, touchY);
		console.log("touch drawing");
	}
};

var engageTouch = function(e){
	mousePressed = true;
	draw(e);
	console.log("true");
};

var disengageTouch = function() {
	mousePressed = false;
	context.beginPath();
	console.log("false");
};

canvas.addEventListener("touchend", disengageTouch);
canvas.addEventListener("touchstart", engageTouch);
canvas.addEventListener("touchmove", drawTouch);

document.body.addEventListener("touchmove", function(event) {
    event.preventDefault();
    event.stopPropagation();
}, false);

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