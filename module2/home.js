       console.log('hello');
      //  alert('hello this is Rachelle');
var b = 'smothie';
console.log(b);

var someNumber = 45;
//console.log(someNumber);

//var age = prompt('Age?');
// document.getElementById('someText').innerHTML = age;

 var num1 = 10;

 num1++;


 console.log(num1);


 num1--;
 console.log(num1);

 console.log(num1 / 6);


 /* Fuction*/
 function fun(){
   console.log('thif ')
 }

 fun();


 function greeting(yourName){
   
   var result = 'Hello' + ' ' + yourName;
   console.log(result);
 }

 /* var name = prompt('What is your name?');
 greeting(name);

 function someNumbers(num1, num2)
 {
   var result = num1 + num2;
   console.log(result);
 }

 //function someNumbers(num1: any, num2: any); void
  someNumbers(10, 10);

 // while loops

 var num = 0;


 // for loop
 for (let num = 0; num < 100; num++) {
 console.log(num);
 }
*/
 // Data types
let yourAge = 18; // number
let yourName = 'Bod' // string
let name = {first: 'Jane', Last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; // undefined
let nothing = null; // value null

// Strins in Javascript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple'; //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toLocaleUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));//split by comma
console.log(fruit.split(''));//split by characters

//Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]); //access value at index 2nd
fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits); //appends
fruits[6] = 


