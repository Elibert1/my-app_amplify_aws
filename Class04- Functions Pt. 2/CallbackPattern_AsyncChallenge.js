//Asynchronous operation means that a process operates independently of other processes, whereas sychronous operation means that the process runs only 
// as a result of some other process being completed or handing off operation. 
setTimeout(function(){
    console.log('later');
//this millisecond timer is the second item passed to the setTimeout function which waits 5 seconds
}, 5000);

console.log('now');

//ES6 Arrow Function 
//let someFunction = (...parameters)=> {}
//ES5 equivalent for arrow function
//let someFunction = function(...parameters){
//}

//Do something when an API request comes back
let teacher = {
	name: 'Shane',
	speak: function(a, b) {
        //this keyword is set during execution time and used when you send off a request; it lets it be known which object called for it
        console.log(this.name, a, b);

        let callbackFunction = () => {
            console.log('later my name is' + this.name);
        };
//ES5
//let callbackFunction = function(){
        //console.log('later my name is' + this.name);
//}.bind(this);

//Maybe you're fetching data from an API, or getting user input
            setTimeout(callbackFunction,1000)
            //Runs immediately
            console.log('Now my name is ' + this.name);
		}	
	}
teacher.speak();

//ES5 method | call() and apply()

//call() is telling you which object and then it passes the parameters through one-by-one
//whereas the apply() differs from the call() by passing the parameters through as an array
//speak.call(teacher, 'coffee', 'ramen')
//speak.apply(teacher ['coffee', 'ramen']);