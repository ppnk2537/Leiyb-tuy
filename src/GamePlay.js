function GamePlay() {
	this.player = [];
	this.rand = [];

	this.set = [ 'juk_dum',
				 'juk_dum',
				 'juk_dum',
				 'juk_dum',
				 'juk_dum',
				 'juk_dang',
				 'juk_dang',
				 'juk_dang',
				 'juk_dang',
				 'juk_dang', 
				 'pao_dum',
				 'pao_dum',
				 'pao_dang',
				 'pao_dang',
				 'ma_dum',
				 'ma_dum',
				 'ma_dang',
				 'ma_dang',
				 'ship_dum',
				 'ship_dum',
				 'ship_dang',
				 'ship_dang',
				 'chang_dum',
				 'chang_dum',
				 'chang_dang',
				 'chang_dang',
				 'bin_dum',
				 'bin_dum',
				 'bin_dang',
				 'bin_dang',
				 'tee_dum',
				 'tee_dang' ];

	this.turn = 0;

	this.state = GamePlay.STATE.PLAYER0;
}

GamePlay.prototype.setPlayer = function( player ) {
	this.player.push(player);
};


GamePlay.prototype.startGame = function() {

    while ( this.rand.length < 32 ) {
    	this.rand.push( Math.floor( Math.random() * 32 ) ); 
    	this.rand = this.rand.unique();
    } 

    for ( var i = 0 ; i < 32 ; i ++ ) {
    	if ( i < 8 )
    		this.player[0].add( this.rand[i] );
    	else if ( i < 16 )
    		this.player[1].add( this.rand[i] );
    	else if ( i < 24 )
    		this.player[0].addNext( this.rand[i] );
    	else
    		this.player[1].addNext( this.rand[i] );
    	 
    }

};

GamePlay.STATE = {
    PLAYER0 : 0,
    PLAYER1 : 1,
    CHECK : 2
};