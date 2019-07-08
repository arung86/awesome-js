/** The length property of an object which is an instance of type Array sets or returns the
 * number of elements in that array. The value is an unsigned, 32-bit integer that is 
 * always numerically greater than the highest index in the array.
 */

/** The @@unscopable symbol property contains property names that were
 *  not included in the ECMAScript standard prior to the ES2015 version. 
 * These properties are excluded from with statement bindings. */

/** Description 
 * The default array properties that are excluded from with bindings are:
 * copyWithin, 
 * entries,
 * fill,
 * find,
 * findIndex,
 * includes,
 * keys, and 
 * values.
 */

// Symbol.unscopables

/**The Symbol.unscopables well-known symbol is used to specify an object
 * value of whose own and inherited property names are excluded from the with environment 
 * bindings of the associated object* 
 */

//  Demo
/*
const object1 = {
    property1: 42
};

object1[Symbol.unscopables] = {
    property1: true
};

with(object1) {
    console.log(property1)
    // expected output: 
    // Error: property1 is not defined
}

/** The following code works fine in ES5 and below.However, in ECMAScript 2015 and later, 
 *  the Array.prototype.keys() method was introduced.That means that inside with environment "keys" 
 *  would now be the method and not the variable.
 * 
 * That 's when the unscopables symbol was introduced. A built-in unscopables setting is implemented 
 * as Array.prototype[@@unscopables] to prevent that some of the Array methods are being scoped 
 * into the with statement.
 */

function scopable() {
    var keys = [];

    with(Array.prototype) {
        keys.push('something');
    }

    Object.keys(Array.prototype[Symbol.unscopables]);
   
    return keys
}
 console.log(scopable())

module.exports = unScopables={
    firstScopable: scopable
};