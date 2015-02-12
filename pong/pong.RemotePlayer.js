(function(){

    /**
     *
     * @param {Object} opts
     *  - `name` {String} Player name
     *  - `local` {Boolean} is local player or remote.
     *
     * @extends PongPlayer
     * @api public
     */
    function PongRemotePlayer(opts){
        window.game.class.PongPlayer.apply(this,arguments);


        /**
         * Holds position relative in canvas.
         *
         * @type {Point}
         * @api public
         */
        this.position = this.opts.position || new window.game.class.Point((this.game.canvas.width-40), (this.game.canvas.height/2) - 50);
    }

    PongRemotePlayer.prototype = Object.create(window.game.class.PongPlayer.prototype);
    PongRemotePlayer.prototype.constructor = PongRemotePlayer;


    /**
     * move player
     *
     * @override
     * @api public
     */
    PongRemotePlayer.prototype.move = function(mMethod){
        this.moves[mMethod] && this.moves[mMethod]();
    };


    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongRemotePlayer = PongRemotePlayer;
})();
