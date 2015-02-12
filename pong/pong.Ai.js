(function(){
    var Vector = window.game.class.Vector;
    /**
     *
     * @param {Game} game
     * @param {Entity} entity
     * @extends Ai
     * @api public
     */
    function PongAi(game, entity){
        window.game.class.Ai.apply(this, arguments);
    }
    PongAi.prototype = Object.create(window.game.class.Ai.prototype);
    PongAi.prototype.constructor = PongAi;


    /**
     * Start entity's movement
     *
     * @api public
     */
    PongAi.prototype.start = function(){
        var random = Math.floor(Math.random()*4);
        this.changeDirection(this.directions[random]);
    };


    /**
     * Stop entity's movement
     *
     * @api public
     */
    PongAi.prototype.stop = function(){
        this.entity.moveDirection = {x:0, y:0};
    };


    /**
     * Reset entity's
     *
     * @api public
     */
    PongAi.prototype.reset = function(){
        var self = this, random, timeout;
        this.entity.moveDirection = {x:0, y:0};
        this.entity.position.x = this.entity.starPosition.x;
        this.entity.position.y = this.entity.starPosition.y;
        this.entity.node.style.display = 'none';
        this.entity.render();

        timeout = setTimeout(function(){
            self.entity.node.style.display = 'inherit';
            if(self.side == 1){
                random = Math.floor(Math.random()*2+0);
                self.changeDirection(self.directions[random]);
            }

            if(self.side == 2){
                random = Math.floor(Math.random()*2+2);
                self.changeDirection(self.directions[random]);
            }
            clearTimeout(timeout);
        }, 1000);
    };


    /**
     * Change entity direction
     *
     * @param {Object} vector
     * @api public
     */
    PongAi.prototype.changeDirection = function(vector){
        this.entity.moveDirection = vector;
    };


    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongAi = PongAi;
})();