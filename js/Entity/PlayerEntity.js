var PlayerEntity = PlaneEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        this.accelerationSpeed = .5;
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
        if(me.input.isKeyPressed('flip')){
             // flip the sprite on horizontal axis
            this.flipX(true);
        }

        if (me.input.isKeyPressed('throttleUp')) {
            this.absoluteVelocity += this.accelerationSpeed * me.timer.tick;
        } else if(me.input.isKeyPressed('throttleDown')){
            this.absoluteVelocity -= this.accelerationSpeed * me.timer.tick;
        }

        if(me.input.isKeyPressed("pitchUp")){
            this.angle -= Number.prototype.degToRad(this.rotateSpeed) * me.timer.tick;
        } else if(me.input.isKeyPressed("pitchDown")){
            this.angle += Number.prototype.degToRad(this.rotateSpeed) * me.timer.tick;
        }

        this.parent(this);

        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
    }
 
});