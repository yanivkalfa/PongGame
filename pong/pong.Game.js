(function(){


    /**
     *
     * @extends Game
     * @api public
     */
    function PongGame(opts){
        window.game.class.Game.apply(this, arguments);
    }

    PongGame.prototype = Object.create(window.game.class.Game.prototype);
    PongGame.prototype.constructor = PongGame;


    /**
     * Initiates all required classes
     *
     * @api public
     */
    PongGame.prototype.init = function(){
        this.entities = new window.game.class.List();
        this.mainLoop = new window.game.class.PongLoop(this, this.opts.cycle || {});
        this.players = new window.game.class.List();
        this.roles = new window.game.class.PongRoles(this);
        //this.inRouter = new window.game.class.InRouter(this);
        //this.outRouter = new window.game.class.OutRouter(this);
        this.renderer = new window.game.class.PongRenderer(true);
        var render = {"fn" : "render", "args" : {}, "ref" : this.renderer };
        this.mainLoop.add(render);
        this.mainLoop.references.add({id:'render', ref : render});

        this.loader = new window.game.class.PongLoader(this, function(){ /*self.start();*/ });
        this.scoreBoard = new window.game.class.PongScoreBoard(this);
        this.scoreBoard.init();
    };


    /**
     * Binds keys
     *
     * @api public
     */
    PongGame.prototype.bindKey = function(){
        document.addEventListener("keydown", this.keydown.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));
    };


    /**
     * Un-bind keys
     *
     * @api public
     */
    PongGame.prototype.unBindKey = function(){
        document.removeEventListener("keydown", this.keydown);
        document.removeEventListener("keyup", this.keyup);
    };


    /**
     * On key down
     *
     * @api public
     */
    PongGame.prototype.keydown = function(e){
        this.keysPressed[e.which || e.keyCode] = true;
    };


    /**
     * on key up
     *
     * @api public
     */
    PongGame.prototype.keyup = function(e){
        this.keysPressed[e.which || e.keyCode] = false;
    };


    /**
     * adding entity to entities Collection
     *
     * @api public
     */
    PongGame.prototype.addEntity = function(entity){
        this.entities.add(entity);
        var entityMove = {"fn" : "move", "args" : {}, "ref" : entity };
        this.mainLoop.add(entityMove);
        this.mainLoop.references.add({id:entity.id, ref : entity});
    };


    /**
     * Removing entity from entities Collection
     *
     * @api public
     */
    PongGame.prototype.removeEntity = function(entity){
        this.entities.remove(entity.id);
        var item = this.mainLoop.references.get(entity.id);
        this.mainLoop.remove(item);
    };


    /**
     * adding Player to Players List
     *
     * @api public
     */
    PongGame.prototype.addPlayer = function(player){
        this.players.add(player);
        this.entities.add(player);
        var playerMove = {"fn" : "move", "args" : {}, "ref" : player };
        this.mainLoop.add(playerMove);
        this.mainLoop.references.add({id:player.id, ref : playerMove});
    };


    /**
     * removing Player from Players List
     *
     * @api public
     */
    PongGame.prototype.removePlayer = function(player){
        this.players.remove(player.id);
        this.entities.add(player.id);
        var item = this.mainLoop.references.get(player.id);
        this.mainLoop.remove(item);
    };


    /**
     * Loading game
     *
     * @api public
     */
    PongGame.prototype.load = function(){
        this.loader.load();
    };


    /**
     * Starting game
     *
     * @api public
     */
    PongGame.prototype.start = function(){
        this.mainLoop.start();
    };


    /**
     * Stopping game
     *
     * @api public
     */
    PongGame.prototype.stop = function(){
        this.mainLoop.stop();
    };


    /**
     * resetting game
     *
     * @api public
     */
    PongGame.prototype.reset = function(){

    };


    /**
     * killing game
     *
     * @api public
     */
    PongGame.prototype.kill = function(){
        this.unBindKey();
        this.stop();
        for(var prop in this){
            if(this.hasOwnProperty(prop)) delete this[prop];
        }
    };

    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongGame = PongGame;
})();