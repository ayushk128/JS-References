//1. Ways to print in Javascript
// document.write("This is written with document write");
// alert("Hi");

//2. Javascript console API
// console.log("Hello world", 5 + 5, "Another log");
// console.warn("This is warning");
// console.error("This is error");
// console.assert(4 == 6);
// console.clear() Used to clear console (inside browser)

// 3. Variables in Javascript
// Container to store data values
var number1 = 2;
var number2 = 5;
// console.log(number1+number2);

// 4. Data types in JS.
// Number
var num1 = 500;
var num2 = 55.56;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    ravi: 50,
    Ayush: 100,
    Harry: 101
}
// console.log(marks);

// Boolean
var a = true;
var b = false;
// console.log(a);
// console.log(b);

// Undefined
var und = undefined;
var und2;
// console.log(und);
// console.log(und2);

var x = null;
// console.log(x);
/*
There are two types of data types in Javascript:
1. Primitive Data types: undefined, number, null, string, boolean, Symbol
1. Refrernce Data types: Arrays and Objects
*/
// Array
var arr = [1, 2, 3, 4, 5];
var brr = [1, 2, "Ayush", 4, 5];
// console.log(arr);

// Operators in JavaScript
// Arithmetic Operators
var aa = 10;
var bb = 5;
// console.log("Value of aa + bb is: ", aa+bb);
// console.log("Value of aa - bb is: ", aa-bb);
// console.log("Value of aa * bb is: ", aa*bb);
// console.log("Value of aa / bb is: ", aa/bb);

// Assignment Operator
var c = aa;
c += 2;
c *= 2;
c /= 2;
// console.log(c);

// Comparison operator
var aaa = 50;
var bbb = 60;
// console.log(aaa == bbb);
// console.log(aaa > bbb);
// console.log(aaa < bbb);
// console.log(aaa >= bbb);
// console.log(aaa <= bbb);

// Logical Operator

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(!true);
// console.log(!false);

// Functions in Javascript
function avg(a, b) {
    return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(10, 20);
// console.log(c1, c2);

var arr = [1, 2, 3, 4, 5, 6];
// for (var i = 0; i<arr.length; i++) {
//     console.log(arr[i]);    
// }
// for each loop
// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 5;
// ac = ac + 1;

// let j = 0;
// while(j < arr.length){
//     console.log(arr[j])
//     j++;
// }
// Some methods on Array
let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
myArr.push("Ayush");
// myArr.shift();
let newLen = myArr.unshift("Ayush");    //Returns new length of the array.
// console.log(newLen);
// console.log(myArr);

let myString = "My name is Ayush Kumar";
// console.log(myString);
// console.log(myString.length);
// console.log(myString.indexOf("Ayush"));
// console.log(myString.lastIndexOf("Ayush"));
// console.log(myString.slice(0, 6));
d = myString.replace("Ayush", "Aayush");
// console.log(myString);
// console.log(d);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Maniplation
let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('button')
// console.log(tn);
d = document.getElementsByTagName('div')
// console.log(d);
let createdElement = document.createElement('p');
createdElement.innerText = "This is a created element";
d[0].appendChild(createdElement);

let newElement = document.createElement('x');
newElement.innerText = "This is another created element which replaces earlier one."
d[0].replaceChild(newElement, createdElement);

// removeChild(Element) --> removes child

// selecting using query
sel = document.querySelector('.container');
// console.log(sel);
sel2 = document.querySelectorAll('.container');
// console.log(sel2);

// Events in Javascript
// function clicked(){
//     console.log("Button was clicked");
// }
firstContainer.addEventListener("click", function () {
    document.querySelectorAll('.container')[1].innerText = "Clicked on lower container";
    console.log("Click hua");
})
// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container");
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of container");
// })
// firstContainer.addEventListener('mouseup', function(){
//     console.log("Mouse up container");
// })
// firstContainer.addEventListener('mousedown', function(){
//     console.log("Mouse down the container");
// })