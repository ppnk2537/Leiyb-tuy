function Player ( name ) {
	this.name = name
	this.set = [];
	this.maxPiece = 8;
	this.piece = 0;
	this.tuy = [];
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

Player.prototype.contain = function( name ) {
	return this.set.indexOf( name ) > -1;
}