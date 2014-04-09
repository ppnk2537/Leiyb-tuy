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
}

GamePlay.prototype.setPlayer = function( player ) {
	this.player.push(player);
};


GamePlay.prototype.startGame = function() {

    while ( this.rand.length < 16 ) {
    	this.rand.push( Math.floor( Math.random() * 32 ) ); 
    	this.rand = this.rand.unique();
    } 

    for ( var i = 0 ; i < 16 ; i ++ ) {
    	if ( i < 8 )
    		this.player[0].add( this.set[this.rand[i]] );
    	else
    		this.player[1].add( this.set[this.rand[i]] );
    	 
    }

    var set = []
    for ( var i = 0 ; i < 32 ; i++ ) {
    	if ( this.rand.indexOf(i) < 0 ) {
    		set.push(i);
    	}
    }

    var dummy = []
    for ( var i = 0 ; i < 16 ; i ++ ) {
    	dummy.push( this.set[this.rand[i]] ); 
    }

    this.set = dummy;

};