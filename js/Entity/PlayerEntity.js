var PlayerEntity = PlaneEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        this.accelerationSpeed = .5;
        this.sound = true;
        this.soundName = 'sopwith_engine';

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        this.determineAndPlaySound();
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    lastWasDown: false,
    alwaysUpdate: true,
    update: function() {
        if(me.input.isKeyPressed('flip')){
            if(!this.lastWasDown){
                this.lastWasDown = true;
                console.log("Flip Pressed");
                if(this.inverted()){
                    this.inverted(false);
                } else {
                    this.inverted(true);
                }
            }
        } else {
            this.lastWasDown = false;
        }

        if (me.input.isKeyPressed('throttleUp')) {
            this.absoluteVelocity += this.accelerationSpeed * me.timer.tick;
            this.determineAndPlaySound();
        } else if(me.input.isKeyPressed('throttleDown')){
            this.absoluteVelocity -= this.accelerationSpeed * me.timer.tick;
            this.determineAndPlaySound();
        }

        if(me.input.isKeyPressed("pitchUp")){
            this.renderable.angle -= (this.invert ? -1 : 1) * Number.prototype.degToRad(this.rotateSpeed) * me.timer.tick;
        } else if(me.input.isKeyPressed("pitchDown")){
            this.renderable.angle += (this.invert ? -1 : 1) * Number.prototype.degToRad(this.rotateSpeed) * me.timer.tick;
        }

        this.parent(this);

        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
    }
 
});