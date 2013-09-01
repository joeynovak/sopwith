var PlaneEntity = FlyingEntity.extend({
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 
        // set the default horizontal & vertical speed (accel vector)
        this.setMaxVelocity(10, 10);

        this.addAnimation("fly", [0]);
        this.addAnimation("flyInverted", [1]);
        this.setCurrentAnimation("fly");
        this.rotateSpeed = 5;
    },

    update: function() {
        this.parent(this);
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
    }
 
});