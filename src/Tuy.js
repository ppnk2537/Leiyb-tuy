var Tuy = cc.Sprite.extend({
    ctor: function(x, y, name) {
        this._super();
        this.initWithFile( 'res/images/'+ name +'.png' );

        this.name = name;
        this.x = x;
        this.y = y;
        
        this.setPosition( this.x, this.y );
    },
    getName: function() {
    	return this.name;
    }
});