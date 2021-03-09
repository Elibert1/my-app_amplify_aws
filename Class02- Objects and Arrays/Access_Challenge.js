let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
        }
	}
};
//The name of the course
console.log(course.name);

//The name of the second teacher
console.log(course.teacher[1]);

//The name of the first student
console.log(course.students[0].name);

//Katy's computer type
console.log(course.students[1].computer.type);

//The preReq equipment object
console.log(course.preReqs.equipment);

//The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);

//String listing the OSOption separated by "or"('linux or osx')
console.log(course.preReqs.equipment.OSOptions[0] + "or" + course.preReqs.equipment.OSOptions[1]);

//An array of all the students that are using OSX
let studentsOsx = [];
//for(i=0; i<course.students.length; i++){
//if(course.students[i].computer.OS == "OSX")
//{
// studentsOsx.push[course.students[i].name);
//  }
//}
if (course.students.computer['OS'] === 'OSX'){
		studentsOsx.push[course.students.name];
}
console.log(studentsOsx);