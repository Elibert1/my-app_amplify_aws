//When trying to access an array using a method just type the array name (students)
//then press the period . which will bring a list in VS code of all the methods

//Filter Function
let students = [
	{firstname: 'John', lastname: 'Lennon', average: 90},
	{firstname: 'Ringo', lastname: 'Starr', average: 58},
	{firstname: 'Paul', lastname: 'McCartney', average: 82}
];
//The filter keyword is a shortcut method, that simplifies the array object (which eliminates works instead of using a for loop)
//by taking an inline function and returning the condition specified in the call back function to index (iterate over the array) an array
//i.e.
//The callback function is the (student) VARIABLE and is taken as a parameter from the filter function(method) which then determines weather or not to include a given item in the filtered ouput array (students)
let passingStudents = students.filter(function(student){
	return student.average > 60;
});
//For loopPsuedo-code example instead of filter method
// let students2 = [];
// for (let index=0; index < students.length; index++){
//     if(students[index].average > 60)
//         students2.push(students[index]);
// }

//Console.log output should be lines 27-30
console.log(passingStudents);

// passingStudents === [
// 	{firstname: 'John', lastname: 'Lennon', average: 90},
// 	{firstname: 'Paul', lastname: 'McCartney', average: 82}
// ];

//Find method works just like filter, except instead of returning an array of values for which 
//the function returns true, it returns only the first element of the array that outputs true.
//i.e.
//The callback which is the anonmious function that being passed the array called students
//and use the something VARIABLE to return the first instance of array that outputs true.
const passingStudents2 = students.find(function (something){
    return something.average > 90;
});
//or
//const passingStudents2 = students.find(function   (something){
//    return something.average < 90 && something.firstname === "Paul McCartney";
//});

//psuedo-code example instead of find method keyword
// function checkForStudent(student) {
//     if(student.average > 90) 
//     return student;
// }
console.log(passingStudents2);

//Map method iterates over the array and produces another array with a new value
// for each item essentially transforming it, in the array; to output a new array.
let FirstNameLastName = students.map(function (student){
    return `${student.firstname} ${student.lastname} has a ${student.average} average`; 
});
console.log(FirstNameLastName);

//Reduce is an array method, that calculates a value based on all the items in an array.
//The array's reduce function lets you iterate over an array and calculate a value.
//i.e.  https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//The reduce method will take the variable from the callback function to keep manipulating the array (students) 
let totalAssignments= students.reduce(function(sum, student,currentIndex, source){
    console.log(student.average);
    return sum + student.average;
//the ,0 initial value isn't provided and reduce will start the callback function at index 1 which skips the first one
//and at the end of the index it was finding undefined objects, going past the pointer because it was trying to [4].
},0)
//After the callback in [student.reduce(callbackfn, InitialValue)] you pass in an initial value for the running "total" which you may want to initialize to a particular value.
//The return value becomes the input for the first parameter of the callback function for the next iteration of the loop.
console.log(totalAssignments);