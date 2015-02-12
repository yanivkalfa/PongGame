(function(){

    /**
     *
     * @param {Object} opts
     *  - `id` {Number} entity id
     *  - `node` {Node} DOM node.
     *  - `position` {Point} entity position
     *  - `dimensions` {Object} entity dimensions
     *  - `moveDistance` {Number} move distance
     *  - `velocityModifier` {Number} velocity modifier
     *  - `acceleration` {Number} acceleration modifier
     *  - `type` {String} Player type
     *
     * @param {Game} game ref
     * @extends Entity
     * @api public
     */
    function PongEntity(opts, game){
        window.game.class.Entity.apply(this,arguments);

        /**
         * Holds moves
         *
         * @type {Moves}
         * @api public
         */
        this.moves = new window.game.class.PongMoves(this.game, this);


        /**
         * Holds collision
         *
         * @type {Collision}
         * @api public
         */
        this.collision = new window.game.class.PongCollision(this.game, this);
    }

    PongEntity.prototype = Object.create(window.game.class.Entity.prototype);
    PongEntity.prototype.constructor = PongEntity;



    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongEntity = PongEntity;
})();
