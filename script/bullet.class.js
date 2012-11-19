function Bullet(paramX, paramY, paramdx, paramdy, paramTarget) {
	//Properties
	this.x=paramX;
	this.y=paramY;
	this.dx=paramdx;
	this.dy=paramdy;
	this.opacity=1;
	this.radius=2;
	this.rgb = '255,255,255';
	this.target = paramTarget;

	//Methods
	this.draw = function() {
		ctx.save();

		ctx.beginPath();
		ctx.strokeStyle = 'rgba(' + this.rgb + ',' + this.opacity + ')';
		ctx.lineWidth = 5;

		this.x = this.x + (this.dx * (5 + Math.random() * 2));
		this.y = this.y + (this.dy * (5 + Math.random() * 2));

		ctx.lineTo(this.x, this.y);
		ctx.lineTo(this.x + (this.dx / 2), this.y + (this.dy / 2));

		this.opacity = this.opacity - 0.1;
		if(this.opacity <= 0) stage.splice(stage.indexOf(this), 1);
		
		if(typeof(this.target) !== 'undefined') {
			if(Math.abs(this.x - this.target.x) < 50 && Math.abs(this.y - this.target.y) < 50 && !this.target.dead) {
				this.target.hit();
			}
		}
		
		ctx.stroke();
		ctx.closePath();

		ctx.restore();
	};
}
