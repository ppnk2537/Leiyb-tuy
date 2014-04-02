function Player ( name ) {
	this.name = name
	this.set = [];
	this.maxPiece = 8;
	this.piece = 0;
}

Player.prototype.add = function( name ) {
	if ( this.piece < this.maxPiece ) {
		this.set.push(name);
		this.piece += 1;	
	}	
};

Player.prototype.remove = function( name ) {
	var index = this.set.indexOf(name);
	if (index > -1) {
    	this.set.splice(index, 1);
	}
	this.piece -= 1;
}

Player.prototype.getSet = function() {
	return this.set;
}