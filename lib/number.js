'use strict';

// FUNCTIONS //

var exp = Math.exp;

// MGF //

/**
* FUNCTION: mgf( x, a, b )
*	Evaluates the moment-generating function (MGF) for a uniform distribution with minimum support `a` and maximum support `b` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @returns {Number} evaluated MGF
*/
function mgf( t, a, b ) {
	var ret;
	if ( t === 0 ) {
		return 1;
	}
	// Case: t not equal to zero
	ret =  exp( t * b ) - exp( t * a );
	ret /= t * ( b - a );
	return ret;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
