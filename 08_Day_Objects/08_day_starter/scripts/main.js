// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// const userList = [];
// for (const keys of Object.keys(users)) {
//   userList.push(users[keys].skills.length);
// }
// const maxSkill = theMaxOf(...userList);
// const maxSkillIndex = userList.indexOf(maxSkill);
// const maxSkillUser = Object.keys(users)[maxSkillIndex];
// console.log(`User with most skills: ${maxSkillUser} with ${maxSkill} skills`);

// const userLogList = [];
// for (const keys of Object.keys(users)) {
//   userLogList.push(users[keys].isLoggedIn);
// }
// console.log(userLogList.filter((item) => item !== true).length);

// console.log(Math.max(...[1, 3, 2, 4, 5, 6, 7, 8, 9, 10]));

// function theMaxOf() {
//   return Math.max(...arguments);
// }

// function theMinOf() {
//   return Math.min(...arguments);
// }

// function isMERNFunc(users){
//   const isMern=[];
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
//   for (let key of Object.keys(users)){
  
// mernStack.every((skill) => users[key].skills.includes(skill)) ? isMern.push(key) : null;
//   }
//   return isMern
  
// }

// console.log(isMERNFunc(users));

// const aList=[10,2,30];
// aList.every(item=>item%2===0)? console.log(`list of even numbers`):console.log("list of odss number");

// // const newUsers=Object.assign({serge:{
// //   skills:["MERN"]
// // }},users);
// // console.log(newUsers)

// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

//   const products = [
// {
//   _id: 'eedfcf',
//   name: 'mobile phone',
//   description: 'Huawei Honor',
//   price: 200,
//   ratings: [
//     { userId: 'fg12cy', rate: 5 },
//     { userId: 'zwf8md', rate: 4.5 }
//   ],
//   likes: []
// },
// {
//   _id: 'aegfal',
//   name: 'Laptop',
//   description: 'MacPro: System Darwin',
//   price: 2500,
//   ratings: [],
//   likes: ['fg12cy']
// },
// {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy']
// }
// ]

// const personAccount=new Object({});
// personAccount.firstName="Serge";
// personAccount.lastName="Toure";
// personAccount.incomes={
//   principal:{
//     amount:900000,
//     description:"from main job"
//   },
//   secondary:{
//     amount:200000,
//     description:"passive income"
//   }
//   };

// personAccount.expenses={
//   fixedExpense:{
//     amount:30000,
//     description:"fixed expenses"
//   },
//   variablesExpenses:{
//     amount:20000,
//     description:"variable expenses"

//   }
// };

// console.log(personAccount);

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
];

function singUp(user){

let isExist= users.some(item=>item._id===user._id)? true:false;
isExist?console.log(" sign in"):users.push(user);
return isExist

}

function signIn(user){
users.push(user);


}

signIn({
  _id:"azerty"
})

console.log(users);

