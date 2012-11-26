var PlaneEntity = FlyingObject.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(3, 15);
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        this.addAnimation("fly", [0]);
        this.setCurrentAnimation("fly");
        this.rotateSpeed = 1;
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {

        if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }

        if (me.input.isKeyPressed('throttleUp')) {
            this.absoluteVelocity;
            this.vel.y = -this.maxVel.y * me.timer.tick;
        } else if(me.input.isKeyPressed('throttleDown')){

        }

        if(me.input.isKeyPressed("pitchUp")){
            this.angle += Number.prototype.degToRad(this.rotateSpeed) * me.timer.tick;
        } else if(me.input.isKeyPressed("pitchDown")){
            this.angle -= Number.prototype.degToRad(this.rotateSpeed) * me.timer.tick;
        }


        // check & update player movement
        this.updateMovement();

        this.parent(this);
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
    }
 
});