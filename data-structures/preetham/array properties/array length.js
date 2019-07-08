/*
The length property of an object which is an instance of type Array sets or 
returns the number of elements in that array.The value is an unsigned, 
32 - bit integer that is always numerically greater than the highest index in the array.
*/

var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

/**The value of the length property is an integer with a positive sign and a
 *  value less than 2 to the 32nd power (232).
 */

var namelistA = new Array(4294967296); //2 to the 32nd power = 4294967296 
var namelistC = new Array(-100) //negative sign

console.log(namelistA.length); //RangeError: Invalid array length 
console.log(namelistC.length); //RangeError: Invalid array length 



var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1; //set array length less than 2 to the 32nd power 
console.log(namelistB.length);

/**You can set the length property to truncate an array at any time. 
 * When you extend an array by changing its length property, the number of actual elements 
 * increases; for example, if you set length to 3 when it is currently 2, 
 * the array now contains 3 elements, which causes the third element to be a non-iterable empty slot. */

const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach(element => console.log(element));
// 1
// 2

/** Iterating over an arraySection
In the following example, the array numbers is iterated through by
looking at the length property.The value in each element is then doubled.
  */
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
    numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]

/** Shortening an arraySection
The following example shortens the array numbers to a 
length of 3 if the current length is greater than 3.
*/
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
    numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3