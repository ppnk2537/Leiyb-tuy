var Tuy = cc.Sprite.extend({
    ctor: function(x, y, name, _id) {
        this._super();
        this.initWithFile( 'res/images/'+ name +'.png' );

        this.name = name;
        this.x = x;
        this.y = y;
        this._id = _id;
        
        this.setPosition( this.x, this.y );
    },

    getName: function() {
    	return this.name;
    },

    setState: function( state ) {
        this.state = state;
    },

    updatePosition: function( x, y ) {
        this.x = x;
        this.y = y;
        this.setPosition( cc.p ( x, y ) );
    },

    isClick: function( x, y ) {
        return  Math.sqrt( ( x - this.x ) * ( x - this.x ) + ( y - this.y ) * ( y - this.y ) ) <= 30;
    }

});

Tuy.STATE = {
    PLAYER0 : 0,
    PLAYER1 : 1,
    NEXT0 : 2,
    NEXT1 : 3
};