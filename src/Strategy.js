var value1 = 0;
var value2 = 0;

function isAvialable( arr ) {
	arr = arr.sort();

	var juk;

	var value;

	if ( arr.length == 6 ) {
		// assign value if there are set of six.
		value = assignValue( arr, hu6 );

	} else if ( arr.length == 5 ) {
		// assign value if there are set of five.
		juk = arr.unique();
		if ( juk.length == 1 ) {
			value = assignJukValue( juk );

		} else {
			value = assignValue( arr, hu5 );
		}

	} else if ( arr.length == 4 ) {
		// assign value if there are set of four.
		juk = arr.unique();
		if ( juk.length == 1 ) {
			value = assignJukValue( juk );
		} else {
			value = assignValue( arr, hu4 );
		}
	} else if ( arr.length == 3 ) {
		// assign value if there are set of three.
		juk = arr.unique();
		if ( juk.length == 1 ) {
			value = assignJukValue( juk );
		} else {
			value = assignValue( arr, hu );
		}
	} else if ( arr.length == 2 ) {
		// assign value if there are set of two.
		value = assignValue( arr, tuy );
	} else {
		// assign value if there is one piece.
		value = assignValue( arr, one );
	}

	return value > -1;
}

function check( arr1 , arr2 ) {
	arr1 = arr1.sort();
	arr2 = arr2.sort();

	var juk1;
	var juk2;

	if ( arr1.length == 6 ) {
		// assign value if there are set of six.
		value1 = assignValue( arr1, hu6 );
		value2 = assignValue( arr2, hu6 );

	} else if ( arr1.length == 5 ) {
		// assign value if there are set of five.
		juk1 = arr1.unique();
		juk2 = arr2.unique();
		if ( juk1.length == 1 ) {
			value1 = assignJukValue( juk1 );
			value2 = assignJukValue( juk2 );

		} else {
			value1 = assignValue( arr1, hu5 );
			value2 = assignValue( arr2, hu5 );
		}

	} else if ( arr1.length == 4 ) {
		// assign value if there are set of four.
		juk1 = arr1.unique();
		juk2 = arr2.unique();
		if ( juk1.length == 1 ) {
			value1 = assignJukValue( juk1 );
			value2 = assignJukValue( juk2 );

		} else {
			value1 = assignValue( arr1, hu4 );
			value2 = assignValue( arr2, hu4 );
		}
	} else if ( arr1.length == 3 ) {
		// assign value if there are set of three.
		juk1 = arr1.unique();
		juk2 = arr2.unique();
		if ( juk1.length == 1 ) {
			value1 = assignJukValue( juk1 );
			value2 = assignJukValue( juk2 );
			
		} else {
			value1 = assignValue( arr1, hu );
			value2 = assignValue( arr2, hu );
		}
	} else if ( arr1.length == 2 ) {
		// assign value if there are set of two.
		value1 = assignValue( arr1, tuy );
		value2 = assignValue( arr2, tuy );
	} else {
		// assign value if there is one piece.
		value1 = assignValue( arr1, one );
		value2 = assignValue( arr2, one );
	}

	return value1 >= value2;
}

function assignValue( arr, set ) {
	for ( var i = 0 ; i < set.length ; i++ ) {
		if ( equal( arr , set[i]) ) 
			return i;
	}
	return 0;
}

function assignJukValue( juk ) {
	if ( equal(juk, ['juk_dang']) ) return 100;

	if ( equal(juk, ['juk_dum']) ) return 50;
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
