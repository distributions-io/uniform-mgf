'use strict';

// MODULES //

var partial = require( './partial.js' );


// MGF //

/**
* FUNCTION: ( out, arr, a, b, accessor )
*	Evaluates the moment-generating function (MGF) for a uniform distribution with minimum support `a` and maximum support `b` using an accessor function.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} a - minimum support
* @param {Number} b - maximum support
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function mgf( y, x, a, b, clbk ) {
	var len = x.length,
		fcn,
		v, i;

	fcn = partial( a, b );
	for ( i = 0; i < len; i++ ) {
		v = clbk( x[ i ], i );
		if ( typeof v === 'number' ) {
			y[ i ] = fcn( v );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
