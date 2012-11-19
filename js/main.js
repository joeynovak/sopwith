var sopwith = {
    onload: function() {

        // init the video
        if (!me.video.init("canvasWrapper", 640, 480, false, 1.0)) {
            alert("Sorry but your browser does not support html 5 canvas.");
            return;
        }

//        // initialize the "audio"
        me.audio.init("mp3,ogg");

        // set all resources to be loaded
        me.loader.onload = this.loaded.bind(this);

        // set all resources to be loaded
        me.loader.preload(resources);

        // load everything & display a loading screen
        me.state.change(me.state.LOADING);
    },

    /* ---

     callback when everything is loaded

     --- */
    loaded: function() {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new PlayScreen());

        me.entityPool.add("mainPlayer", PlayerEntity);

       // enable the keyboard
       me.input.bindKey(me.input.KEY.LEFT,  "left");
       me.input.bindKey(me.input.KEY.RIGHT, "right");
       me.input.bindKey(me.input.KEY.X,     "jump", true);

       // start the game
        // start the game
        me.state.change(me.state.PLAY);
    }

};
// jsApp
/* the in game stuff*/


//bootstrap :)
window.onReady(function() {
    sopwith.onload();
});
