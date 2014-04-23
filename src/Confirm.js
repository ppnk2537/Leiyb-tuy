var Confirm = cc.Sprite.extend({
    ctor: function( x, y, player ) {
        this._super();
        this.initWithFile( 'res/images/confirm.png' );

        this.player = player;
        this.x = x;
        this.y = y;
        
        this.setPosition( this.x, this.y );
    },

    getName: function() {
    	return this.name;
    },

    isClick: function( x, y ) {
        return  Math.abs( x - this.x ) <= 75 && Math.abs( y - this.y ) <= 30 ;
    }

});