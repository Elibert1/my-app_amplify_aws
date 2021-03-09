//Constructor
function Person(){
	this.brain = true;
};
function Student(){
	this.computer = true;
};
function Graduate(){
	this.skillz = 'Mad'
};

let p = new Person();
Student.prototype = p;
console.log(p);

let s = new Student();
Graduate.prototype = s;
console.log(s);

let g = new Graduate();
console.log(g);

console.log(g.skillz, g.computer, g.brain);

//prototype chain that uses previous example of g and sees if it has it
console.log(g.hasOwnProperty('skillz'),g.hasOwnProperty('computer')) //true,false