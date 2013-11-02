var PlayScreen = me.ScreenObject.extend({

    onResetEvent: function() {
        me.levelDirector.loadLevel("level1");
    },

    /* ---

     action to perform when game is finished (state change)

     --- */
    onDestroyEvent: function() {
    }

});