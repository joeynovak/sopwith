var FlyingEntity = me.ObjectEntity.extend({
    init: function(x, y, settings){
        this.parent(x, y, settings);
        this.absoluteVelocity = 0;
        this.accelerationSpeed = 1;
        this.maxAbsoluteVelocity = 15;
        this.minAbsoluteVelocity = 0;
    },

    invert: false,
    sound: false,
    soundName: '',
    currentSoundFile: '',

    inverted: function inverted(invert){
        if(invert == undefined){
            return this.invert;
        } else {
            this.invert = invert;
            if(invert){
                this.setCurrentAnimation("flyInverted");
            } else {
                this.setCurrentAnimation("fly");
            }
        }
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
    },

    determineAndPlaySound: function(){
        if(!this.sound){
            return;
        }

        var ratioOfMax = this.absoluteVelocity / this.maxAbsoluteVelocity;
        var soundFile = '';
        if(ratioOfMax <= 0){
            soundFile = 'idle';
        } else if(ratioOfMax <= .2){
            soundFile = '0.2';
        } else if(ratioOfMax <= .3){
            soundFile = '0.3';
        } else if(ratioOfMax <= .4){
            soundFile = '0.4';
        } else if(ratioOfMax <= .5){
            soundFile = '0.5';
        } else if(ratioOfMax <= .6){
            soundFile = '0.6';
        } else if(ratioOfMax <= .7){
            soundFile = '0.7';
        } else if(ratioOfMax <= .8){
            soundFile = '0.8';
        } else if(ratioOfMax <= .9){
            soundFile = '0.9';
        } else {
            soundFile = '1';
        }
        soundFile = this.soundName + soundFile;
        if(this.currentSoundFile != soundFile){
            if(this.currentSoundFile != ''){
                me.audio.stop(this.currentSoundFile);
            }
            this.currentSoundFile = soundFile;
            me.audio.play(this.currentSoundFile, true);
        }
    }
});