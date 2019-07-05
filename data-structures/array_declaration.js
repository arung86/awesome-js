//defining array
const numbers = new Array(10, 13, 14);
document.write("<div>Print element in an numbers</div>"); 
document.write("<span>"+numbers+" "+"</span>");

//pushing element

numbers.push(4, 15);
document.write("<div>Push element in an numbers = 4,15 </div>"); 
document.write(numbers);

//poping element
numbers.pop();
document.write("<div>Pop element in an array =15</div>"); 
document.write(numbers);

//shifting element

numbers.shift();
document.write("<div>shift element in an array = 10</div>"); 
document.write(numbers);

//unshifting element
numbers.unshift(664);
document.write("<div>unshift element in an array = 664</div>"); 
document.write(numbers);



//insert At element
numbers.insertAt(450, 1); 
document.write("<div>inserting element at position 2</div>"); 
document.write(numbers);

//delete at element
numbers.deleteAt(3);
document.write("<div>deleting element at position 3</div>");
document.write(numbers);

//getElement
numbers.getElementAtIndex(2);
document.write("<div>get element at position 2");
document.write(numbers);