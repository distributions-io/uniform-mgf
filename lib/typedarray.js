'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: mgf( out, arr, a, b )
*	Evaluates the moment-generating function (MGF) for a uniform distribution with minimum support `a` and maximum support `b` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function mgf( y, x, a, b ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial ( a, b );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = fcn( x[ i ] );
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
