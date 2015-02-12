(function(){

    /**
     *
     * @param {Game} game
     * @param {Entity} entity
     * @extends Moves
     * @api public
     */
    function PongMoves(game, entity){
        window.game.class.Moves.apply(this,arguments);
    }

    PongMoves.prototype = Object.create(window.game.class.Moves.prototype);
    PongMoves.prototype.constructor = PongMoves;

    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongMoves = PongMoves;
})();