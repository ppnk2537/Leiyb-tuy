function Player ( name , isLead ) {
	this.name = name
	this.set = [];
	this.next = [];
	this.choose = [];
	this.isLead = isLead;
}

Player.prototype.add = function( name ) {
	this.set.push(name);
};

Player.prototype.addNext = function( name ) {
	this.next.push(name);
};

Player.prototype.remove = function( name ) {
	var index = this.set.indexOf(name);
	if (index > -1) {
    	this.set.splice(index, 1);
	}
}

Player.prototype.getSet = function() {
	return this.set;
}

Player.prototype.contain = function( name ) {
	return this.set.indexOf( name ) > -1;
}
