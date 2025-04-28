// // // // console.log(countries)
// // // // alert('Open the console and check if the countries has been loaded')


// // // // const numbers = [24, 45, "Ali"];
// // // // const [age, , nom] = numbers;
// // // // console.log(`Age: ${age}\nTaille:\nNom: ${nom}`);
// // // // console.log(numbers);

// // // // const names = [undefined, "Brook", "David"];
// // // // let [
// // // //   firstPerson = "Asabeneh",
// // // //   secondPerson,
// // // //   thirdPerson,
// // // //   fourthPerson = "John",
// // // // ] = names;

// // // // console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
// // // // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // let [num1, num2, num3, ...otherItemsList] = nums;

// // // // console.log(num1, num2, num3);
// // // // console.log("others:", otherItemsList);



const constants = [2.72, 3.14, 9.81, 37, 100]
const [e,pi,gravity,humanBodyTemp]=constants;
console.log(e,pi,gravity,humanBodyTemp)
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin,est,sw,den,nor]=countries;
console.log(fin,est,sw,den,nor)
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const {width,area,perimeter,height}=rectangle;
console.log(width,height,area,perimeter);
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
];

console.log(users.filter(({skills})=>skills.length<2))


const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent={...student};
 newStudent.skills.frontEnd.push({skill:'bootstrap',level:8});
 newStudent.skills.backEnd.push({skill:'Express',level:9});
 newStudent.skills.dataBase.push({skill:'SQL',level:8});
 newStudent.skills.dataScience.push('SQL');

 console.log(newStudent)


console.log(convertArrayToObject(students))



function convertArrayToObject(students){

let studentObj=[]
  for (let [name,skills,scores] of students){
    studentObj.push({
      name:name,
      skills:skills,
      scores:scores
    });
  }

  return studentObj
  

}
