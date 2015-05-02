var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth-700;
canvas.height = window.innerHeight+150;

context.lineWidth = radius*2;

var putPoint = function(e){
	if(dragging){
		context.lineTo(e.clientX,e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX,e.clientY);
	}
}

var engage = function(e){
	dragging=true;
	putPoint(e);
}
var disengage = function(){
	dragging=false;
	context.beginPath();
}
canvas.addEventListener('mousedown', engage); 
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage); 

function clearCanvas(canvas){
	canvas.width = canvas.width;	
}

function save2(){
	var imageData = context.getImageData(0,0,canvas.width,canvas.height);
	var imgsave = context.putImageData(imageData,0,0);
	window.open(imgsave,'_blank','location=0, menubar=0');
}
