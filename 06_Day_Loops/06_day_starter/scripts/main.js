const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let i=0;
while(i<=10){
    console.log(`${i} * ${i} = ${i*i}`);
    i++;
}

for (let i=0; i <= 10; i++) {
    console.log(`${i} ${Math.pow(i,2)} ${Math.pow(i,3)}`);
}

const tableOf=(param, toEnd) => {
  for (let k = 0; k <= toEnd; k++) {
    console.log(`${param} * ${k} = ${param * k}`);

  }

}

tableOf(5,15);
for (let i=0;i<=100;i++){
  if(i%2===0){
    console.log(i);

  }}
let myArray=Array.from({length:100}, (_,i)=>i+1);
console.log(myArray);
console.log(myArray.filter((num)=>num%2!==0).reduce((acc, num)=>acc+num,0));

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log(randomArray);
const a=[];
for(let i=0;i<=6;i++){
 a.push(Math.floor(Math.random()*100)); 

}
console.log(a);
const generateId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 13; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log(id);
}
generateId();

const generatePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log(password);
}
generatePassword();

