var FlyingObject = me.ObjectEntity.extend({
    init: function(){
        this.parent(this);
        this.absoluteVelocity = 0;
        this.accelerationSpeed = 1;
        this.maxAbsoluteVelocity = 100;
    },

    update : function(){
        this.vel.x = Math.sin(this.angle) * this.absoluteVelocity;
        this.vel.y = Math.cos(this.angle) * this.absoluteVelocity;
        if(this.absoluteVelocity != 0){
            this.parent(this);
            return true;
        } else {
            return false;
        }
    }
});