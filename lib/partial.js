'use strict';

// FUNCTIONS //

var exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( a, b )
*	Partially applies minimum support `a` and maximum support `b` and returns a function for evaluating the moment-generating function (MGF) for a uniform distribution.
*
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @returns {Function} MGF
*/
function partial( a, b ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a uniform distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		var ret;
		if ( t === 0 ) {
			return 1;
		}
		// Case: t not equal to zero
		ret =  exp( t * b ) - exp( t * a );
		ret /= t * ( b - a );
		return ret;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
