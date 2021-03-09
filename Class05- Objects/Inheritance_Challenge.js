//This is a factory function
//function createTeacher(name){
//     return {
//     //The name property
//         name: name
//     }
// }

//Constructor function
function Teacher(name){
    this.name= name;
    // this.teach = function() {
    //     console.log('I am ${this.name} the teacher')
    // }
 }

 let olga = new Teacher('Olga');
 Teacher.prototype = {
    teach: () => {  //The teach property is an object
        console.log(`I am ${this.name} the teacher`);
        console.log(this);
    }
}

let ken = new Teacher('ken');

ken.teach();
olga.teach();
console.log(ken);