var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setMouseEnabled( true );

        this.gamePlay = new GamePlay();

        this.player = [];

        this.tuy = [];

        this.addPlayer( 'aun' , 0 , true );
        this.addPlayer( 'aun2' , 1 , false );

        this.initTuy();

        this.gamePlay.startGame();

        this.assignTuy();

        this.confirm0 = new Confirm( 920 , 160 ,this.player[0] );
        this.addChild( this.confirm0 );
		
		this.clear0 = new Clear( 920 , 80 ,this.player[0] );
        this.addChild( this.clear0 );

        this.confirm1 = new Confirm( 2000 , 160 ,this.player[1] );
        this.addChild( this.confirm1 );
		
		this.clear1 = new Clear( 2000 , 80 ,this.player[1] );
        this.addChild( this.clear1 );

        this.p1turn = cc.Sprite.create("res/images/player1s_turn.png");
		this.p2turn = cc.Sprite.create("res/images/player1s_turn.png");
		
        this.p1turn.setPosition( new cc.Point(540, 240));
		this.p2turn.setPosition( new cc.Point(1620, 240));
        this.addChild( this.p1turn, 200 );
		this.addChild( this.p2turn, 200 );
        this.scheduleOnce(function(){
            this.removeChild(this.p1turn);
			this.removeChild(this.p2turn);
        },1)

        return true;
    },

    addPlayer: function( name , number , isLead ) {
        this.player[number] = new Player( name , isLead );
        this.gamePlay.setPlayer( this.player[number] );
    },

    initTuy: function() {
        for ( var i = 0 ; i < 32 ; i++ ) {
            this.tuy[i] = new Tuy( 20 * i + 40 , 240 , this.gamePlay.set[i] , i);
            this.addChild( this.tuy[i] );
        }
    },

    assignTuy: function() {

        var n = 1000;

        if ( this.player[0].set.length == 0 ) {
            if ( this.player[0].next.length == 0 || this.player[1].next.length == 0 ) {
                console.log( 'Game Over' ); 
            }
            else {
                do {
                    n = 2 * parseInt( prompt("input number of pair of tuy pieces.") );
                } while ( n >= this.player[1].next.length || n >= this.player[1].next.length );
                    
            }

            for ( var i = 0 ; i < n ; i++ ) {
                this.player[0].add( this.player[0].next[i] );
                this.player[1].add( this.player[1].next[i] );
            }
            this.player[0].next = this.player[0].next.slice( n , this.player[0].next.length );
            this.player[1].next = this.player[1].next.slice( n , this.player[1].next.length );
            console.log( this.player[0].set );
            console.log( this.player[1].set );

            console.log( this.player[0].next );
            console.log( this.player[1].next );

        }

        for ( var i = 0 ; i < this.player[0].set.length ; i++ ) {
            this.tuy[ this.player[0].set[i] ].updatePosition( 80*i + 160 , 80 );
            this.tuy[ this.player[0].set[i] ].reset();
        }

        for ( var i = 0 ; i < this.player[1].set.length ; i++ ) {
            this.tuy[ this.player[1].set[i] ].updatePosition( 80*i + 1240 , 80 );
            this.tuy[ this.player[1].set[i] ].reset();
        }

		var j = 1;
        for ( var i = 0 ; i < this.player[0].next.length ; i++ ) {
			if ( i % 2 == 0 ) j += 1;
            this.tuy[ this.player[0].next[i] ].updatePosition( 80*j , 160 );
            this.tuy[ this.player[0].next[i] ].reset();
        }
	
		j = 1;
        for ( var i = 0 ; i < this.player[1].next.length ; i++ ) {
			if ( i % 2 == 0 ) j += 1;
            this.tuy[ this.player[1].next[i] ].updatePosition( 80*j + 1080 , 160 );
            this.tuy[ this.player[1].next[i] ].reset();
        }
    },

    onMouseDown: function( event ) {

        var loc = event.getLocation();

        if ( this.player[0].isLead ) {
            if ( this.gamePlay.state == GamePlay.STATE.PLAYER0 ) {
                for ( var i = 0 ; i < this.player[0].set.length ; i++ ) {
                    if ( this.tuy[ this.player[0].set[i] ].isClick( loc.x , loc.y ) ) {
                        this.player[0].choose.push( this.player[0].set[i] );
                        console.log( this.getTuys( this.player[0] ) );
                    }
                }

                if ( this.confirm0.isClick( loc.x, loc.y ) ) {
                    if ( isAvialable( this.getTuys( this.player[0] ) ) ) {
						var num = this.player[0].choose.length;
						this.number1 = cc.Sprite.create("res/images/number" + num + ".png");
						this.number2 = cc.Sprite.create("res/images/number" + num + ".png");
						
						this.number1.setPosition( new cc.Point(540, 240));
						this.number2.setPosition( new cc.Point(1620, 240));
						this.addChild( this.number1, 200 );
						this.addChild( this.number2, 200 );
						this.scheduleOnce(function(){
							this.removeChild(this.number1);
							this.removeChild(this.number2);
						},1)
						
						this.gamePlay.state = GamePlay.STATE.PLAYER1;
	
						this.scheduleOnce( function() {
							this.p1turn = cc.Sprite.create("res/images/player2s_turn.png");
							this.p2turn = cc.Sprite.create("res/images/player2s_turn.png");
							
							this.p1turn.setPosition( new cc.Point(540, 240));
							this.p2turn.setPosition( new cc.Point(1620, 240));
							this.addChild( this.p1turn, 200 );
							this.addChild( this.p2turn, 200 );
							this.scheduleOnce(function(){
								this.removeChild(this.p1turn);
								this.removeChild(this.p2turn);
							},1)
						},1);
                    }
                    else
                        this.player[0].choose = [];
                }
				
				if ( this.clear0.isClick( loc.x, loc.y ) ) {
					for ( var i = 0 ; i < this.player[0].set.length ; i++ ) {
						this.tuy[ this.player[0].set[i] ].reset();
					}
					this.player[0].choose = [];
				}
					
            }

            if ( this.gamePlay.state == GamePlay.STATE.PLAYER1 ) {
                for ( var i = 0 ; i < this.player[1].set.length ; i++ ) {
                    if ( this.tuy[ this.player[1].set[i] ].isClick( loc.x , loc.y ) ) {
                        this.player[1].choose.push( this.player[1].set[i] );    
                        console.log( this.getTuys( this.player[1] ) );
                    }
                }
	
				if ( this.clear1.isClick( loc.x, loc.y ) ) {
					for ( var i = 0 ; i < this.player[1].set.length ; i++ ) {
						this.tuy[ this.player[1].set[i] ].reset();
					}
					this.player[1].choose = [];
				}
				
                if ( this.confirm1.isClick( loc.x, loc.y ) ) {
                    if ( this.player[0].choose.length != this.player[1].choose.length ) {
                        this.player[1].choose = [];
                        return;
                    }
                    
                    var x = check( this.getTuys( this.player[0] ) , this.getTuys( this.player[1] ) );

                    console.log( x );

                    this.gamePlay.state = GamePlay.STATE.PLAYER0;

                    if ( !x ) {
                        for ( var i = 0 ; i < this.player[1].choose.length ; i++ ) {
                            this.player[1].addNext( this.player[1].choose[i] );
                            this.player[1].addNext( this.player[0].choose[i] );
                            this.player[1].remove( this.player[1].choose[i] );
                            this.player[0].remove( this.player[0].choose[i] );
                        }
                        this.player[1].isLead = true;
                        this.player[0].isLead = false;
                        this.gamePlay.state = GamePlay.STATE.PLAYER1;

                        this.p1turn = cc.Sprite.create("res/images/player2s_turn.png");
						this.p2turn = cc.Sprite.create("res/images/player2s_turn.png");
						
						this.p1turn.setPosition( new cc.Point(540, 240));
						this.p2turn.setPosition( new cc.Point(1620, 240));
						this.addChild( this.p1turn, 200 );
						this.addChild( this.p2turn, 200 );
						this.scheduleOnce(function(){
							this.removeChild(this.p1turn);
							this.removeChild(this.p2turn);
						},1)
                    }
                    else {
                        for ( var i = 0 ; i < this.player[0].choose.length ; i++ ) {
                            this.player[0].addNext( this.player[0].choose[i] );
                            this.player[0].addNext( this.player[1].choose[i] );
                            this.player[0].remove( this.player[0].choose[i] );
                            this.player[1].remove( this.player[1].choose[i] );
                        }

                        this.p1turn = cc.Sprite.create("res/images/player1s_turn.png");
						this.p2turn = cc.Sprite.create("res/images/player1s_turn.png");
						
						this.p1turn.setPosition( new cc.Point(540, 240));
						this.p2turn.setPosition( new cc.Point(1620, 240));
						this.addChild( this.p1turn, 200 );
						this.addChild( this.p2turn, 200 );
						this.scheduleOnce(function(){
							this.removeChild(this.p1turn);
							this.removeChild(this.p2turn);
						},1)
                    }

                    this.player[0].choose = [];
                    this.player[1].choose = [];

                    this.assignTuy();
                }
            }
        }
        else {
            if ( this.gamePlay.state == GamePlay.STATE.PLAYER1 ) {
                for ( var i = 0 ; i < this.player[1].set.length ; i++ ) {
                    if ( this.tuy[ this.player[1].set[i] ].isClick( loc.x , loc.y ) ) {
                        this.player[1].choose.push( this.player[1].set[i] );
                        console.log( this.getTuys( this.player[1] ) );
                    }
                }

                if ( this.confirm1.isClick( loc.x, loc.y ) ) {
                    if ( isAvialable( this.getTuys( this.player[1] ) ) ) {
						var num = this.player[1].choose.length;
						this.number1 = cc.Sprite.create("res/images/number" + num + ".png");
						this.number2 = cc.Sprite.create("res/images/number" + num + ".png");
						
						this.number1.setPosition( new cc.Point(540, 240));
						this.number2.setPosition( new cc.Point(1620, 240));
						this.addChild( this.number1, 200 );
						this.addChild( this.number2, 200 );
						this.scheduleOnce(function(){
							this.removeChild(this.number1);
							this.removeChild(this.number2);
						},1)
						
                        this.gamePlay.state = GamePlay.STATE.PLAYER0;
	
						this.scheduleOnce( function() {
							this.p1turn = cc.Sprite.create("res/images/player1s_turn.png");
							this.p2turn = cc.Sprite.create("res/images/player1s_turn.png");
							
							this.p1turn.setPosition( new cc.Point(540, 240));
							this.p2turn.setPosition( new cc.Point(1620, 240));
							this.addChild( this.p1turn, 200 );
							this.addChild( this.p2turn, 200 );
							this.scheduleOnce(function(){
								this.removeChild(this.p1turn);
								this.removeChild(this.p2turn);
							},1)
						},1);
                    }
                    else
                        this.player[1].choose = [];
                }
				
				if ( this.clear1.isClick( loc.x, loc.y ) ) {
					for ( var i = 0 ; i < this.player[1].set.length ; i++ ) {
						this.tuy[ this.player[1].set[i] ].reset();
					}
					this.player[1].choose = [];
				}
            }

            if ( this.gamePlay.state == GamePlay.STATE.PLAYER0 ) {
                for ( var i = 0 ; i < this.player[0].set.length ; i++ ) {
                    if ( this.tuy[ this.player[0].set[i] ].isClick( loc.x , loc.y ) ) {
                        this.player[0].choose.push( this.player[0].set[i] );
                        console.log( this.getTuys( this.player[0] ) );
                    }
                }
				
				if ( this.clear0.isClick( loc.x, loc.y ) ) {
					for ( var i = 0 ; i < this.player[0].set.length ; i++ ) {
						this.tuy[ this.player[0].set[i] ].reset();
					}
					this.player[0].choose = [];
				}
				
                if ( this.confirm0.isClick( loc.x, loc.y ) ) {
                    if ( this.player[1].choose.length != this.player[0].choose.length ) {
                        this.player[0].choose = [];
                        return;
                    }

                    var x = check( this.getTuys( this.player[1] ) , this.getTuys( this.player[0] ) );
                    
                    console.log( x );

                    this.gamePlay.state = GamePlay.STATE.PLAYER1;

                    if ( !x ) {
                        for ( var i = 0 ; i < this.player[0].choose.length ; i++ ) {
                            this.player[0].addNext( this.player[0].choose[i] );
                            this.player[0].addNext( this.player[1].choose[i] );
                            this.player[0].remove( this.player[0].choose[i] );
                            this.player[1].remove( this.player[1].choose[i] );
                        }
                        this.player[1].isLead = false;
                        this.player[0].isLead = true;
                        this.gamePlay.state = GamePlay.STATE.PLAYER0;

                        this.p1turn = cc.Sprite.create("res/images/player1s_turn.png");
						this.p2turn = cc.Sprite.create("res/images/player1s_turn.png");
						
						this.p1turn.setPosition( new cc.Point(540, 240));
						this.p2turn.setPosition( new cc.Point(1620, 240));
						this.addChild( this.p1turn, 200 );
						this.addChild( this.p2turn, 200 );
						this.scheduleOnce(function(){
							this.removeChild(this.p1turn);
							this.removeChild(this.p2turn);
						},1)

                    }
                    else {
                        for ( var i = 0 ; i < this.player[1].choose.length ; i++ ) {
                            this.player[1].addNext( this.player[1].choose[i] );
                            this.player[1].addNext( this.player[0].choose[i] );
                            this.player[1].remove( this.player[1].choose[i] );
                            this.player[0].remove( this.player[0].choose[i] );
                        }

                        this.p1turn = cc.Sprite.create("res/images/player2s_turn.png");
						this.p2turn = cc.Sprite.create("res/images/player2s_turn.png");
						
						this.p1turn.setPosition( new cc.Point(540, 240));
						this.p2turn.setPosition( new cc.Point(1620, 240));
						this.addChild( this.p1turn, 200 );
						this.addChild( this.p2turn, 200 );
						this.scheduleOnce(function(){
							this.removeChild(this.p1turn);
							this.removeChild(this.p2turn);
						},1)
                    }

                    this.player[0].choose = [];
                    this.player[1].choose = [];
                    
                    this.assignTuy();
                }
            }
        }
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

