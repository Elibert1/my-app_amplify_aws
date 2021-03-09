//In OOP their is always a master class, in this case its called object. Teacher inherits every property of object and then starts to do the extensions we see in this file.
//functions are objects from an item in JavaScript, you create a object by calling a function, capitalize the object of the constructor (in this example we have a nameIn property and teach method) 
function Teacher(nameIn) {
//The "this" keyword is making sure it understands the instance it belongs to (Teacher1). 
	this.name = nameIn;
//Now this Class has a property called name and it also has a teach function(anytime you call a function inside of a (CLASS) object,  it is called a METHOD (method is part of the class)) that logs to the console some information.
	this.teach = () => {
		console.log(`${this.name} says hi constructors`);
    }
}
//An instance (intstantiation) of a new object to invoke a constructor
//The "new" keyword is setting up the object, by saying "call this object function and then pass it teacher". Then teacher sets up base upon the object class
//teacher1(teacher2 as well) is of instance Teacher(the object) and by using a function infront of (Teacher, line 3) the object, you create an object constructor of Teacher. 
//In the Scope of...
//teacher1(teacher2 as well), has proto-inheritance [Prototype Chain(the hierarchy of the scope)] which means the constructors calls this function of teacher, 
//after the constructor in the next hierachial tier calls the object, which means teacher is now a member of object and inherits from the object. 
let teacher1 = new Teacher('Ken');
let teacher2 = new Teacher('Sierra');

console.log(teacher1.teach());
teacher2.teach();