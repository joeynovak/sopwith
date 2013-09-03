var PlaneEntity = FlyingEntity.extend({
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 
        // set the default horizontal & vertical speed (accel vector)
        this.setMaxVelocity(10, 10);

        this.renderable.addAnimation("fly", [0]);
        this.renderable.addAnimation("flyInverted", [1]);
        this.renderable.setCurrentAnimation("fly");
        this.rotateSpeed = 5;
    },

    update: function() {
        this.parent(this);
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
    }
 
});