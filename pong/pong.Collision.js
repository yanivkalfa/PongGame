(function(){

    /**
     *
     * @param {Game} game
     * @param {Entity} entity
     * @extends Collision
     * @api public
     */
    function PongCollision(game, entity){
        window.game.class.Collision.apply(this, arguments)
    }
    PongCollision.prototype = Object.create(window.game.class.Collision.prototype);
    PongCollision.prototype.constructor = PongCollision;


    /**
     * Moves entity in the left direction
     *
     * @api public
     */
    PongCollision.prototype.check = function(nextPoint, moveDist, movDir){
        var distance = this.entity.position.distance(nextPoint);
        var scale = this.entity.moveDistanceScale / distance ;
        if(scale == 'Infinity'){
            this.entity.velocity = new window.game.class.Vector(0,0);
        }else{
            this.entity.velocity = this.entity.position.relative(nextPoint).scale(scale);
        }

        if (this.entity.position.y <= 0 && movDir < 0) {
            this.entity.position.y = 0;
            this.entity.velocity.x = 0;
            this.entity.velocity.y = 0;
        }else if(this.entity.position.y >= this.game.canvas.height - this.entity.dimensions.height && movDir > 0){
            this.entity.position.y = this.game.canvas.height - this.entity.dimensions.height;
            this.entity.velocity.x = 0;
            this.entity.velocity.y = 0;
        }

        //SPEED += ACCELERATION;
        return {x:this.entity.velocity.x * moveDist, y:this.entity.velocity.y * moveDist}
    };


    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongCollision = PongCollision;
})();