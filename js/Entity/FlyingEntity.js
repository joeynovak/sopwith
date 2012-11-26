var FlyingEntity = me.ObjectEntity.extend({
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.absoluteVelocity = 0;
        this.accelerationSpeed = 1;
        this.maxAbsoluteVelocity = 100;
        this.minAbsoluteVelocity = 0;
    },

    update : function(){
        if(this.absoluteVelocity > this.maxAbsoluteVelocity){
            this.absoluteVelocity = this.maxAbsoluteVelocity;
        }

        if(this.absoluteVelocity < this.minAbsoluteVelocity){
            this.absoluteVelocity = this.minAbsoluteVelocity;
        }

        this.vel.x = Math.sin(this.angle + 1.57) * this.absoluteVelocity;
        this.vel.y = -Math.cos(this.angle + 1.57) * this.absoluteVelocity;
        if(this.absoluteVelocity != 0){
            this.updateMovement();
            this.parent(this);
            return true;
        } else {
            return false;
        }
    }
});