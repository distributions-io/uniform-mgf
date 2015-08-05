'use strict';

// FUNCTIONS //


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

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
