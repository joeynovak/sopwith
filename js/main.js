var sopwith = {
    onload: function() {

        // init the video
        if (!me.video.init("canvasWrapper", 1024, 768, true, 1)) {
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
        me.entityPool.add("Storage", StorageEntity);

       // enable the keyboard
       me.input.bindKey(me.input.KEY.PERIOD,        "flip");
       me.input.bindKey(me.input.KEY.COMMA,         "pitchUp");
       me.input.bindKey(me.input.KEY.QUESTIONMARK,  "pitchDown");
       me.input.bindKey(me.input.KEY.X,             "throttleUp");
       me.input.bindKey(me.input.KEY.Z,             "throttleDown");
       me.input.bindKey(me.input.KEY.SPACE,         "shoot", true);
       me.input.bindKey(me.input.KEY.B,             "dropBomb", true);

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
