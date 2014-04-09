var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.gamePlay = new GamePlay();

        this.player1 = new Player('aun');
        this.gamePlay.setPlayer1( this.player1 );

        this.player2 = new Player('aun');
        this.gamePlay.setPlayer2( this.player2 );
        
        this.gamePlay.startGame();

        this.tuy1 = [];
        this.tuy2 = [];

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy1[i] = new Tuy( 80*i + 80 , 80 , this.player1.set[i]);
            this.addChild(this.tuy1[i]);
        }

         for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy2[i] = new Tuy( 80*i + 80 , 400 , this.player2.set[i]);
            this.addChild(this.tuy2[i]);
        }

        console.log( this.player1.getSet() );
        console.log( this.player2.getSet() );
        console.log( this.gamePlay.set );

        return true;
    },

    
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

