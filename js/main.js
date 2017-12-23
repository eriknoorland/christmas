var snowflakes = new Array;
var canvas, context;
var width = 800, height = 600;

$(document).ready(function(){
	canvas = $('#snow')[0];
	context = canvas.getContext('2d');
	
	resize();
	
	var i = 0;
	for(i = 0; i < 200; i++)
		snowflakes.push({
			xPos:Math.random() * width,
			yPos: Math.random() * height,
			xSpeed:(Math.random() * .2) + 1,
			ySpeed:(Math.random() * 1) + 1,
			radius:(Math.random() * 3) + 1
		});
	
	setInterval(draw, 50);
});

$(window).resize(resize);

function draw(){
	context.clearRect(0, 0, window.width, window.height);
	var i = 0, speedX, speedY;
	for(i = 0; i < snowflakes.length; i++){
		context.beginPath();
		context.arc(snowflakes[i].xPos, snowflakes[i].yPos, snowflakes[i].radius, 0, 2 * Math.PI, false);
		context.fillStyle = '#ffffff';
		context.fill();
		
		snowflakes[i].xSpeed += (Math.random() * 1) - .5;
		snowflakes[i].xPos += snowflakes[i].xSpeed;
		if(snowflakes[i].xPos > width)
			snowflakes[i].xPos = 0;
		else if(snowflakes[i].xPos < 0)
			snowflakes[i].xPos = width;
		
		snowflakes[i].yPos += snowflakes[i].ySpeed;
		if(snowflakes[i].yPos > height)
			reset(i);
	}
}

function reset(i){
	snowflakes[i].xSpeed = (Math.random() * .2) + 1;
	snowflakes[i].xPos = Math.random() * width;
	snowflakes[i].yPos = 0;
}

function resize(){
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	
	$('#greeting')
		.css('left', ((width / 2) - (parseInt($('#greeting').css('width')) / 2)) + 'px')
		.css('top', ((height / 2) - (parseInt($('#greeting').css('height')) / 2)) + 'px')
		.css('top', (((height - parseInt($('#snowman').css('height'))) / 2) - (parseInt($('#greeting').css('height')) / 2)) + 'px');
}