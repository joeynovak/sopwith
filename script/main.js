// Global variables
var stage = new Array();
var rightDown = false;
var leftDown = false;

const PI = Math.PI ;
const TwoPI = Math.PI * 2;
const HalfPI = Math.PI / 2;
const QuarterPI = Math.PI / 4;
const OneDegree = Math.PI / 360;
const ThreeDegrees = Math.PI / 120;
const TenDegrees = Math.PI / 36;
const TwentyDegrees = Math.PI / 18;

const planeWidth = 32;
const planeHeight = 18;

function init() {
	planeCanvas = document.getElementById('plane');
	planeCanvas.width = document.width;
	planeCanvas.height = document.height; 
	ctx = planeCanvas.getContext('2d');
	
	initiateLevel();
	setInterval(render,50);
}

function initiateLevel() {
	stage.push(new Plane(0, 0));
}

function render() {
	//clearCanvas();
	ctx.clearRect(0,0,document.width,document.height);

	for(i in stage) {
		stage[i].draw();
	}
}


function clearCanvas() {
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0, 0, document.width, document.height);
}


$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}
