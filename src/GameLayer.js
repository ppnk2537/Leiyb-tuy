var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.player1 = new Player('aun');
        this.player2 = new Player('aun');

        this.startGame();

        return true;
    },

    startGame: function() {
        var remainTuy = 32;
        
        for ( var i = 0 ; i < 8 ; i++ ) {
            var randomNumber = Math.floor( Math.random() * remainTuy );
            this.player1.add( set[randomNumber] );
            set.removeIndex( randomNumber );
            remainTuy -= 1;
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            var randomNumber = Math.floor( Math.random() * remainTuy );
            this.player2.add( set[randomNumber] );
            set.removeIndex( randomNumber );
            remainTuy -= 1;
        }
        

    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

