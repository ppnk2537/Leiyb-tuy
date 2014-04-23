var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setMouseEnabled( true );

        this.gamePlay = new GamePlay();

        this.player = [];

        this.tuy = [];

        this.addPlayer( 'aun' , 0 );
        this.addPlayer( 'meng' , 1 );
        
        this.initTuy();

        this.gamePlay.startGame();

        this.assignTuy();

        this.confirm0 = new Confirm( 600 , 160 ,this.player[0] );
        this.addChild( this.confirm0 );

        this.confirm1 = new Confirm( 120 , 320 ,this.player[1] );
        this.addChild( this.confirm1 );

        return true;
    },

    addPlayer: function( name , number ) {
        this.player[number] = new Player( name );
        this.gamePlay.setPlayer( this.player[number] );
    },

    initTuy: function() {
        for ( var i = 0 ; i < 32 ; i++ ) {
            this.tuy[i] = new Tuy( 20 * i + 40 , 240 , this.gamePlay.set[i] , i);
            this.addChild( this.tuy[i] );
        }
    },

    assignTuy: function() {

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy[ this.player[0].set[i] ].setState( Tuy.STATE.PLAYER0 );
            this.tuy[ this.player[0].set[i] ].updatePosition( 80*i + 80 , 80 );
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy[ this.player[1].set[i] ].setState( Tuy.STATE.PLAYER1 );
            this.tuy[ this.player[1].set[i] ].updatePosition( 80*i + 80 , 400 );
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy[ this.player[0].next[i] ].setState( Tuy.STATE.NEXT0 );
            this.tuy[ this.player[0].next[i] ].updatePosition( 60*i + 80 , 160 );
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            this.tuy[ this.player[1].next[i] ].setState( Tuy.STATE.NEXT1 );
            this.tuy[ this.player[1].next[i] ].updatePosition( 60*i + 220 , 320 );
        }
    },

    onMouseDown:function( event ) {

        var loc = event.getLocation();

        for ( var i = 0 ; i < 8 ; i++ ) {
            if ( this.tuy[ this.player[0].set[i] ].isClick( loc.x , loc.y ) )
               this.player[0].choose.push( this.player[0].set[i] );
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            if ( this.tuy[ this.player[1].set[i] ].isClick( loc.x , loc.y ) )
                this.player[1].choose.push( this.player[1].set[i] );
        }

        console.log( this.confirm0.isClick( loc.x, loc.y ) );
    },

    getTuys:  function( player ) {
        var tuyNames = [];
        for ( var i = 0 ; i < player.choose.length ; i++ ) {
            tuyNames.push( this.tuy[ player.choose[i] ].getName() );
        }
        return tuyNames;
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

