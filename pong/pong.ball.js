(function(){

    /**
     *
     * @param {Object} opts
     *  - `name` {String} Player name
     *  - `local` {Boolean} is local player or remote.
     *
     * @param {PongGame} game ref
     *
     * @extends PongEntity
     * @api public
     */
    function PongBall(opts, game){
        window.game.class.PongEntity.apply(this,arguments);


        /**
         * Holds position relative in canvas.
         *
         * @type {Point}
         * @api public
         */
        this.position = this.opts.position || new window.game.class.Point((this.game.canvas.width/2)-5, (this.game.canvas.height/2)-5);


        /**
         * Holds start position relative in canvas.
         *
         * @type {Point}
         * @api public
         */
        this.starPosition = this.opts.starPosition || new window.game.class.Point((this.game.canvas.width/2)-5, (this.game.canvas.height/2)-5);


        /**
         * Holds dimensions
         *
         * @type {Object}
         * @api public
         */
        this.dimensions = this.opts.dimensions || {
            width  : 10,
            height  : 10
        };


        /**
         * Holds background
         *
         * @type {String}
         * @api public
         */
        this.background = 'blue';


        /**
         * Holds collision
         *
         * @type {Collision}
         * @api public
         */
        this.ai = new window.game.class.PongAi(this.game, this);


        /**
         * Holds collision
         *
         * @type {Collision}
         * @api public
         */
        this.collision = new window.game.class.BallCollision(this.game, this);
    }

    PongBall.prototype = Object.create(window.game.class.PongEntity.prototype);
    PongBall.prototype.constructor = PongBall;


    /**
     * renders entity
     *
     * @api public
     */
    PongBall.prototype.render = function(){
        this.node.style.left = this.position.x + 'px';
        this.node.style.top = this.position.y + 'px';
    };


    /**
     * loads entity
     *
     * @api public
     */
    PongBall.prototype.load = function(){
        this.node = document.createElement("div");
        this.node.className = 'npcBox gameObject';
        this.node.id = 'entity_' + this.id;

        this.node.style.top = this.position.y + 'px';
        this.node.style.left = this.position.x + 'px';
        this.node.style.width = this.dimensions.width + 'px';
        this.node.style.height = this.dimensions.height + 'px';
        this.node.style.backgroundColor = this.background;

        this.game.canvas.node.appendChild(this.node);
        this.game.loader.loaded(this);
    };


    /**
     * move player
     *
     * @override
     * @api public
     */
    PongBall.prototype.move = function(){
        if(this.moveDirection.x != 0 || this.moveDirection.y != 0) this.moves.moveVector(this.moveDirection);
    };


    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongBall = PongBall;
})();
