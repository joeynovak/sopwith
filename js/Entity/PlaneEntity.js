var PlaneEntity = FlyingEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 
        // set the default horizontal & vertical speed (accel vector)
        this.setMaxVelocity(10, 10);
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        this.addAnimation("fly", [0]);
        this.setCurrentAnimation("fly");
        this.rotateSpeed = 5;
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
        this.parent(this);
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
    }
 
});