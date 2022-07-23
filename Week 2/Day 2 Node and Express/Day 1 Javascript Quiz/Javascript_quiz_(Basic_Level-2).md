## 1. Why do we use functions in JavaScript?
- A JavaScript function is a block of code designed to perform a particular task.

## 2. What is Function Invocation?
- Function calling is function Invocation.

## 3. Does a function behave like an object in Javascript? Prove it by an example.
- Yes, in JS world a function is considered an object
function showFavoriteIceCream() {
  const favIceCream = 'chocolate';
  console.log(`My favorite ice cream is ${favIceCream}`);
}
showFavoriteIceCream.flavours = ['chocolate', 'vanilla', 'strawberry'];
console.log(showFavoriteIceCream);

## 4. What are Events in Javascript?
- JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. 
- When the page loads, it is called an event. When the user clicks a button, that click too is an event.

## 5. What is a string?
- A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.
 
## 6. What is an array? Is it static or dynamic in Javascript?
- an array is collection of similar elements.
- JavaScript Arrays are dynamic in nature, which implies that their length can be changed at the time of execution

## 7. Difference between Map and Set?
- A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
- Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

## 8. Difference between Array and Map?
- Array elements can be accessed by indexing and map can access elements by keys.

## 9. What are array methods? List a few names?
- Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.
- methods are also functions.
- push(), pop(), shift() etc.

## 10. In how many ways can we traverse through an array in Javascript?
- 6 ways, some are inbuilt functiions like forEach(), for_in, for_of etc.

## 1. Reverse an array? Input: [1, 2, 3, 4, 5, 6]
- var a = [1, 2, 3, 4, 5, 6];
- a.reverse();

## 2. Explain the properties of the join array method function via program?
var a = [ 1, 2, 3, 4, 5, 6 ]; 
document.write(a.join('/')); 

## 3. Show all the values of an array in a html webpage using DOM and forEach method?
var numbers = document.getElementById('num');
numbers.forEach(myFunction);
function myFunction(a){
console.log(a);
}

## 4. Merge to sets in javascript? (hint use Set class in javascript)
const set1 = new Set(['one', 'two']);
const set2 = new Set(['three']);
const set3 = new Set([...set1, ...set2]);
console.log(set3);