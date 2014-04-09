function GamePlay() {
	this.player1;
	this.player2;

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
}

GamePlay.prototype.setPlayer1 = function( player1 ) {
	this.player1 = player1;
};

GamePlay.prototype.setPlayer2 = function( player2 ) {
	this.player2 = player2;
};

GamePlay.prototype.startGame = function() {
        var remainTuy = 32;
        
        for ( var i = 0 ; i < 8 ; i++ ) {
            var randomNumber = Math.floor( Math.random() * remainTuy );
            this.player1.add( this.set[randomNumber] );
           	this.set.removeIndex( randomNumber );
            remainTuy -= 1;
        }

        for ( var i = 0 ; i < 8 ; i++ ) {
            var randomNumber = Math.floor( Math.random() * remainTuy );
            this.player2.add( set[randomNumber] );
            this.set.removeIndex( randomNumber );
            remainTuy -= 1;
        }
};