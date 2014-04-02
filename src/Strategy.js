var value1 = 0;
var value2 = 0;

function check( arr1 , arr2 ) {
	arr1 = arr1.sort();
	arr2 = arr2.sort();

	var juk1;
	var juk2;

	if ( arr1.length == 6 ) {
		// assign value if there are set of six.
		assignValue( arr1, arr2, hu6 );

	} else if ( arr1.length == 5 ) {
		// assign value if there are set of five.
		juk1 = arr1.unique();
		juk2 = arr2.unique();
		if ( juk1.length == 1 ) {

			assignJukValue();

		} else {

			assignValue( arr1, arr2, hu5 );
		}

	} else if ( arr1.length == 4 ) {
		// assign value if there are set of four.
		juk1 = arr1.unique();
		juk2 = arr2.unique();
		if ( juk1.length == 1 ) {

			assignJukValue();

		} else {

			assignValue( arr1, arr2, hu4 );
		}
	} else if ( arr1.length == 3 ) {
		// assign value if there are set of three.
		juk1 = arr1.unique();
		juk2 = arr2.unique();
		if ( juk1.length == 1 ) {

			assignJukValue();
			
		} else {

			assignValue( arr1, arr2, hu );

		}
	} else if ( arr1.length == 2 ) {
		// assign value if there are set of two.
		assignValue( arr1, arr2, tuy );

	} else {
		// assign value if there is one piece.
		assignValue( arr1, arr2, one );

	}

	return value1 > value2;
}

function assignValue( arr1, arr2, set ) {
	for ( var i = 0 ; i < set.length ; i++ ) {
		if ( equal( arr1 , set[i]) ) 
			value1 = i;
		if ( equal( arr2 , set[i]) ) 
			value2 = i;
	}
}

function assignJukValue() {
	if ( equal(juk1, ['juk_dang']) ) value1 = 2;

	if ( equal(juk1, ['juk_dum']) ) value1 = 1;

	if ( equal(juk2, ['juk_dang']) ) value2 = 2;

	if ( equal(juk2, ['juk_dum']) ) value2 = 1;
			
}

function equal( a ,  b ) { return !( a < b || b < a); }

Array.prototype.unique = function() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) == -1) {
            unique.push(this[i]);
        }
    }
    return unique;
};

Array.prototype.remove = function(name) {
	var index = this.indexOf(name);
	if (index > -1) {
    	this.splice(index, 1);
	}
}

Array.prototype.removeIndex = function(position) {
	this.splice(position,1);
}
