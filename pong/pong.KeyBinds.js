(function(){

    /**
     *
     * @extends KeyBinds
     * @api public
     */
    function PongKeyBinds(){
        window.game.class.KeyBinds.apply(this,arguments);
    }

    PongKeyBinds.prototype = Object.create(window.game.class.KeyBinds.prototype);
    PongKeyBinds.prototype.constructor = PongKeyBinds;


    PongKeyBinds.prototype.init = function(){
        var moveUp
            , MoveDown
            ;

        moveUp = function(game){
            if(game.keysPressed[87] || game.keysPressed[38]) return 'moveUp';
            return false;
        };

        MoveDown = function(game){
            if(game.keysPressed[83] || game.keysPressed[40]) return 'moveDown';
            return false;
        };

        this.add(moveUp);
        this.add(MoveDown);
    };


    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongKeyBinds = PongKeyBinds;
})();
