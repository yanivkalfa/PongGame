(function(){


    /**
     * Loop through collection and invoke function within it
     *
     * @param {Object} opts
     *  - `cycleEvery` {Number} How often cycle will be executed in mili-seconds
     *  -
     *
     * @param {Game} game ref object
     * @extends Loop
     * @api public
     */
    function PongLoop(game , opts){
        window.game.class.Loop.apply(this,arguments);
    }

    PongLoop.prototype = Object.create(window.game.class.Loop.prototype);
    PongLoop.prototype.constructor = PongLoop;

    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongLoop = PongLoop;
})();
