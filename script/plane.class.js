function Plane(paramX, paramY) {
	//Properties
	this.x=paramX;
	this.y=paramY;
	
	plane = new Image();
	plane.src = '/assets/plane.png';
	this.components = plane;

	this.angle = 0;

	this.s = 5;

	//Methods
	this.draw = function() {					//Draw
		ctx.save();

		dx = Math.cos(this.angle) * this.s;
		dy = Math.sin(this.angle) * this.s;

		this.x = this.x + dx;
		this.y = this.y + dy;

		this.s = this.s + (dy / 50);
		//$('#airspeed').text(this.s);

		bRight = true;

		if((-HalfPI < this.angle) && (this.angle < HalfPI)) {
			//$('#direction').text('right');
			this.angle = (this.angle + (OneDegree * (10 / this.s)))  % TwoPI;
		} else {
			bRight = false;
			this.angle = (this.angle - (OneDegree * (10 / this.s)))  % TwoPI;
			//$('#direction').text('left');
		}



		if(this.s < 3 && bRight) {
			//this.s = - this.s;
			this.angle = this.angle - TenDegrees;
		} else if(this.s < 2) {
			this.angle = this.angle + TenDegrees;
		}


		if(leftDown) {
			this.angle = (this.angle - TenDegrees) % TwoPI;
		}

		if(rightDown) {
			this.angle = (this.angle + TenDegrees) % TwoPI;
		}

		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.translate(-this.x - 46, -this.y - 18);

		bRight ? ctx.drawImage(this.components, 0, 0, 55, 29, this.x, this.y, 55, 29) : ctx.drawImage(this.components, 55, 0, 55, 29, this.x, this.y, 55, 29);
		
		stage.push(new Smoke(this.x + (Math.random() * 5), this.y + (Math.random() * 5)));

		//$('#angle').text(this.angle);
		//$('#dx').text(dx);
		//$('#dy').text(dy);

		ctx.restore();
	};
}
