function Plane() {
	//Properties
	this.x=0;
	this.y=0;
	this.dead=false;
	this.health = 100;

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
			this.angle = this.angle - TenDegrees;
		} else if(this.s < 3) {
			this.angle = this.angle + TenDegrees;
		}


		if(leftDown) {
			this.angle = (this.angle - TenDegrees) % TwoPI;
		}

		if(rightDown) {
			this.angle = (this.angle + TenDegrees) % TwoPI;
		}
		
		if(spacebarDown) {
			stage.push(new Bullet(this.x, this.y, dx, dy, computer));
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
		computerScore++;
	}
	
	this.hit = function() {
		this.health -= 1;
		stage.push(new Smoke(this.x + (Math.random() * 5), this.y + (Math.random() * 5), 10));
		
		if(this.health <= 0) {
			this.dead = true;
			this.explode();		
		}
	}
	
	this.spawn = function() {
		player = new Plane();
		player.x = $(document).width() * Math.random();
		player.y = $(document).height() * Math.random();
		stage.push(player);
	}
}
