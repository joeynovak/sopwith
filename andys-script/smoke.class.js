function Smoke(paramX, paramY, paramRadius) {
	//Properties
	this.x=paramX;
	this.y=paramY;
	this.opacity=0.25;
	if(typeof(paramRadius) !== 'undefined') {
		this.radius=paramRadius;
	} else {
		this.radius=2;
	}
	this.rgb = '255,255,255';

	//Methods
	this.draw = function() {
		ctx.save();

		ctx.beginPath();
		ctx.fillStyle = 'rgba(' + this.rgb + ',' + this.opacity + ')';
		ctx.shadowColor   = 'rgba(' + this.rgb + ',1)';

		ctx.shadowBlur    = 10;

		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
		ctx.fill();

		this.radius = this.radius + 1;
		this.opacity = this.opacity - 0.03;
		if(this.opacity <= 0) stage.splice(stage.indexOf(this), 1);

		ctx.restore();
	};
}
