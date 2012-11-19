var level;

function Level(paramLevel) {
	//Properties

	$.get('/levels/' + paramLevel + '.xml', {}, function(xml) {
		level = xml;
	});

	//Methods
	this.draw = function() {
		ctx.save();

		ctx.strokeStyle = 'rgb(255,255,255)';

		$('asset', level).each(function() {
			asset = this;
			$(asset).find('instance').each(function()  {
				ctx.beginPath();
				instance = this;
				$(asset).find('points point').each(function() {
					ctx.lineTo(parseInt($(instance).attr('x')) + parseInt($(this).attr('x')), parseInt($(instance).attr('y')) + parseInt($(this).attr('y')));
				});

				ctx.stroke();
				ctx.closePath();
			});
		});

		ctx.restore();
	};
}
