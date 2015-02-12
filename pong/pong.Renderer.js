(function(){


    /**
     * Renders the graphics for added entities.
     *
     * @param {Boolean} unique ref
     * @extends Renderer
     * @api public
     */
    function PongRenderer(unique){
        window.game.class.Renderer.apply(this,arguments);
    }

    PongRenderer.prototype = Object.create(window.game.class.Renderer.prototype);
    PongRenderer.prototype.constructor = PongRenderer;

    if(!window.game) window.game = {};
    if(!window.game.class) window.game.class = {};
    window.game.class.PongRenderer = PongRenderer;
})();
