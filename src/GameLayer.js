var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.gamePlay = new GamePlay();

        this.player = [];

        this.tuy = [];

        this.addPlayer( 'aun' , 0 );
        this.addPlayer( 'meng' , 1 );
        
        this.gamePlay.startGame();

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy[i] = new Tuy( 80 * i  + 80 , 80 ,this.player[0].set[i] );
            this.addChild( this.tuy[i] );
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy[i + 8] = new Tuy( 80 * i  + 80 , 400 ,this.player[1].set[i] );
            this.addChild( this.tuy[i + 8] );
        }

        return true;
    },

    addPlayer: function( name , number ) {
        this.player[number] = new Player( name );
        this.gamePlay.setPlayer( this.player[number] );
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

