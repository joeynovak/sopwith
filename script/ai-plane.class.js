function AIPlane() {
	//Properties
	this.x=0;
	this.y=0;
	this.dead=false;

	plane = new Image();
	plane.src = '/assets/plane.png';
	this.components = plane;

	this.angle = 0;
	this.s = 10;

	this.width = 55;
	this.height = 29;

	//Methods
	this.draw = function() {
		ctx.save();

		dx = Math.cos(this.angle) * this.s;
		dy = Math.sin(this.angle) * this.s;

		this.x = this.x + dx;
		this.y = this.y + dy;

		this.s = this.s + (dy / 100);

		bRight = true;

		if((-HalfPI < this.angle) && (this.angle < HalfPI)) {
			this.angle = (this.angle + (OneDegree * (10 / this.s)))  % TwoPI;
		} else {
			bRight = false;
			this.angle = (this.angle - (OneDegree * (10 / this.s)))  % TwoPI;
		}

		if(this.s < 3 && bRight) {
			//this.angle = this.angle - TenDegrees;
		} else if(this.s < 2) {
			//this.angle = this.angle + TenDegrees;
		}

		targetX = player.x - computer.x;
		targetY = player.y - computer.y;

		var regular = (computer.angle - Math.atan2(targetY, targetX));
		var backwards = (computer.angle - (Math.atan2(targetY, targetX) - TwoPI));
		var forwards = (computer.angle - (Math.atan2(targetY, targetX) + TwoPI));
		if(Math.abs(regular) < Math.abs(backwards) && Math.abs(regular) < Math.abs(forwards)) {
			targetAngle = regular;
		} else if (Math.abs(forwards) < Math.abs(backwards)) {
			targetAngle = forwards;
		} else {
			targetAngle = backwards;
		}

		var bulletAngle = targetAngle;

		if(targetAngle > 0) {
			targetAngle = Math.min(targetAngle, FiveDegrees);
		} else {
			targetAngle = Math.max(targetAngle, -FiveDegrees);
		}

		computer.angle -= targetAngle;

		if(Math.abs(bulletAngle)<0.3) {
			stage.push(new Bullet(this.x, this.y, dx, dy, player));
		}

		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.translate(-this.x - 46, -this.y - 18);

		bRight ? ctx.drawImage(this.components, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height) : ctx.drawImage(this.components, this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);

		stage.push(new Smoke(this.x + (Math.random() * 5), this.y + (Math.random() * 5)));

		ctx.restore();
	};
	
	// Explode
	this.explode = function() {
		plane = this;
		stage.splice(stage.indexOf(this), 1);
		for(i=0;i<10;i++) {
			setTimeout(function() {
				stage.push(new Smoke(plane.x + (Math.random() * 75), plane.y + (Math.random() * 75), 50));
			}, 100 * i);
		}
		setTimeout(this.spawn, 2000);
		playerScore++;
	}
	
	this.spawn = function() {
		computer = new AIPlane();
		computer.x = $(document).width() * Math.random();
		computer.y = $(document).height() * Math.random();
		stage.push(computer);
	}
}
