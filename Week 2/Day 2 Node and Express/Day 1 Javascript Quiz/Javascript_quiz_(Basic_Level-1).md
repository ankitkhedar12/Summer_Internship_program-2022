# 1. What is JavaScript?
- JavaScript is a light-weight object-oriented programming language that is used by several websites for scripting the webpages.
- JavaScript enables dynamic interactivity on websites when it is applied to an HTML document.
- JavaScript is commonly used to dynamically modify HTML and CSS to update a user interface by the DOM API.

# 2. What is the difference between b/w let and var?
- The key difference between var and let is not in the syntax, but it differs in the semantics.
- var keyword has global scope whereas let keyword has a limited scope that is within a block.
- var can be declared globally and can be accessed globally whereas let can be declared globally but cannot be accessed globally.

# 3. Why do we prefer const over var?
- When we don't want to change the value of already declared variable then we prefer const over var.

# 4. What is the use of javascript in web browsers?
- In web browsers Javascript is used to dynamically modify HTML and CSS to update a user interface by the DOM API.

# 5. What are Objects?
- Obects in javascript are similar to physical objects that also have some properties or we can say collection of key-value pair.

# 6. What is an array and how is it different from an Object in Javascript?
- Actually array is object in javascript that don't have pair value for keys.

# 7. What is a function?
- Function is a chunk of code that is reusable to use memory efficiently.

# 8. How can we implement call by value and call by reference in Javascript?
- Pass by Value in JavaScript -> Pass by value in JavaScript means that a copy of the actual parameter’s value is made in memory i.e. a new memory allocation is done, and all the changes are made in that new value
- Pass by Reference -> Unlike pass by value in JavaScript, pass by reference in JavaScript does not create a new space in the memory, instead, we pass the reference/address of the actual parameter which means, the function can access the original value of the variable.
# 9. What are the primitive data types in Javascript?
- Boolean
- Null
- Number
- Sstring
- Undefined
- Objects

# 10. What is DOM?
- DOM is a way to represent the webpage in a structured hierarchical way so that it will become easier for programmers and users to glide through the document.

# 11. Why do we need DOM?
- DOM is used to modify HTML and CSS using javascript.

# Programs
## 1. Average of array nums in Javascript?

const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

average([99, 45, 26, 7, 11, 122, 22]);

//array is passed in function.

## 2. Swap two numbers by reference?

let object = {a = 4, 
            b = 5
            } 
function swap(object){
    let temp = object.a;
    object.a = object.b; 
    object.b = temp;
}

## 3. Print the fibonacci sequence?
const number = 10;
let a = 0, b = 1, c;

console.log('Fibonacci Series:');
console.log(a); // print 0
console.log(b); // print 1

c = a + b;
while(c <= number) {
    console.log(c);
    a = b;
    b = c;
    c = a + b;
}

## 4. Sort an array by both ascending and descending order?
function sortArray(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

sortArrat.sort();

//Descending
function sortArrayDesc(a, b) {
  if (a > b) {
    return -1;;
  } else if (b > a) {
    return 1;;
  } else {
    return 0;
  }
}

sortArrayDesc.sort();

## 5. Show a variable value in an HTML webpage using DOM?
//Javascript
var name="Khedar";
document.getElementById("me").innerHTML=name;

//HTML
<p id="me"></p>