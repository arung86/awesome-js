// Create an Array
var fruits = ['Apple', 'Banana'];
console.log(fruits.length);

// Access(index into) an Array item

var first = fruits[0];
console.log(first);
var last = fruits[fruits.length - 1];
console.log(last);

// Loop over an Array
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});

// Add to the end of an Array
var newLength = fruits.push('Orange');


// Remove from the end of an Array
var last = fruits.pop();

// Remove from the front of an Array
var first = fruits.shift();

// Add to the front of an Array
var newLength = fruits.unshift('Strawberry');

// Find the index of an item in the Array
fruits.push('Mango');
console.log(fruits);

var pos = fruits.indexOf('Banana');
console.log(pos);

//  Remove an item by index position
var removedItem = fruits.splice(pos, 1);

// Remove items from an index position
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1,
    n = 2;

// Remove items from an index position

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]


// Copy an Array
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]