// Global variables
var stage = new Array();
var rightDown = false;
var leftDown = false;
var spacebarDown = false;
var player = false, computer = false;
var playerScore = 0, computerScore = 0;

const PI = Math.PI ;
const TwoPI = Math.PI * 2;
const HalfPI = Math.PI / 2;
const QuarterPI = Math.PI / 4;
const OneDegree = Math.PI / 360;
const ThreeDegrees = Math.PI / 120;
const FiveDegrees = Math.PI / 72;
const TenDegrees = Math.PI / 36;
const TwentyDegrees = Math.PI / 18;

function init() {
	planeCanvas = document.getElementById('plane');
	planeCanvas.width = document.width;
	planeCanvas.height = document.height;
	ctx = planeCanvas.getContext('2d');

	initiateLevel();
	setInterval(render,50);
}

function initiateLevel() {
	//stage.push(new Level(1));
	player = new Plane();
	player.spawn();
	
	computer = new AIPlane();
	computer.spawn();
}

function render() {
	ctx.clearRect(0,0,document.width,document.height);

	for(i in stage) {
		stage[i].draw();
	}
	
	ctx.fillStyle = "White";
	ctx.font = 'italic 30px sans-serif';
	ctx.fillText("Player:" + playerScore, 10, 50);  
	
	ctx.strokeStyle = 'white';
	
	ctx.beginPath();
	ctx.lineWidth = 15;
	ctx.lineTo(10, 75);
	ctx.lineTo(10 + player.health, 75);
	ctx.stroke();
	ctx.closePath();
	
	ctx.fillText("Computer:" + computerScore, 10, 150);  
	
	ctx.beginPath();
	ctx.lineWidth = 15;
	ctx.lineTo(10, 175);
	ctx.lineTo(10 + computer.health, 175);
	ctx.stroke();
	ctx.closePath();
}


/* -------------------------- */
/* Detect key events */
/* -------------------------- */
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
	if (evt.keyCode == 32) spacebarDown = true;	
	
	if (evt.keyCode == 39) rightDown = true;
	else if (evt.keyCode == 37) leftDown = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
	if (evt.keyCode == 32) spacebarDown = false;	
	
	if (evt.keyCode == 39) rightDown = false;
	else if (evt.keyCode == 37) leftDown = false;
}
