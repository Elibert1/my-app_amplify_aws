let x = [];
let y = new String('xyz');
//this 
let z = ''.substring;

var a = ['a','d','b','aa','c'];
var b = [7, 5, 3, 13, 1, 12, 123];

//Sort in descending lexicographical order using a compare function
a.sort(function (x, y) {return x < y; } );
b.sort(function(x, y) {return x < y; } );

console.log('a:', a);
console.log('b:', b);