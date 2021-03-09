//(IIFE) Immediately Invoked Function Expressions 

(function(){
	let myVar = "look mom, private variables!";
  
//The second parentheses () which is after the curly brace }) is a call block which will be calling the function ahead of it.
})();
console.log(myVar); //undefined;

//All variable declarations [using var] are lifted to the top of their functional/local scope (if declared inside a function) or
//to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made.
//This is what we mean by “hoisting”. https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1

//Nested Scope Function
function outer(){
//initializing a & b
  let a = "Outer a";
  let b ={name: "Outer Object B"};
  console.log(a,b);
// inner();
//let inner = function(){
//if line 20 & 21 were true instead of line 11, an error message would display because line 8 hasn't initialized the inner function (line 8) yet and the hoisting effect doesn't take place. 

//line 20 & line 27 will work because when calling a function KEYWORD [ (function inner(){ ) inner is the KEYWORD of the function varible]
//inside of the global scope (the outer function) the declaration is lifted to the top of their global scope [function outer(){ ]
// (if declared outside of a function) regardless of where the actual declaration has been made.
    function inner(a,b) {
      a = "Inside A";
      b = {name: "Inner Object A"};
      console.log(a,b);
    }
//the inner function must be called inside the global scope (the outer function) so an error message isn't thrown. 
    inner(a, b);
    console.log(a,b);
  }
  outer();

//Variable Name Conflict 

//The variable that is being leveraged inside a function, that also has the same name as a variable outside of a function
//will have a console.log(variable_name) of the outside function
let name = 'David';
let greet = function(name) {
	console.log(name);
}
greet('joe'); // 'joe'

//which is equivalant to
let name = 'David';
let greet = function(mySuperUniqueVariableName) {
	let name = mySuperUniqueVariableName;
	console.log(name);
}
greet('joe'); // 'joe'
