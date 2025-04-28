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
  const emptyArray =Array();
  const numbers=new Array(5).fill(0);
  console.log(numbers);
  const splicedNumber=numbers.splice(1,3, 1, 2, 3);
  console.log(splicedNumber);
  console.log(numbers);
const lastNumber=numbers.pop();
const firstNumber=numbers.shift();
console.log(lastNumber);
console.log(firstNumber);
const middleNumber=numbers.splice(1,1).pop();
console.log(middleNumber);
numbers.push(4,8,9,4,5,3,2,1,8);
console.log(numbers);
if(numbers.length%2!==0){
    const i=numbers[Math.floor(numbers.length/2)];
    console.log(`The middle number is ${i} at index ${Math.floor(numbers.length/2)}`);
} else {
    console.log(`There is no middle number`);
}
 const mixedDataType=[
    1,
    'Hello',
    true,
    null,
    undefined,
    {name:'John'},
    [1,2,3],
 ]
    console.log(mixedDataType.length);
    console.log(mixedDataType[0]);
    console.log(mixedDataType[mixedDataType.length-1]);
    console.log(mixedDataType[mixedDataType.length-2].name);

let WebTech=webTechs.toString().toUpperCase().split(',');
console.log(WebTech);
console.log(Array.isArray(WebTech));
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText = text.replace(/[.,]/g, '');
console.log(newText.split(' '));
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const minAge=ages.shift();
const maxAge=ages.pop();
console.log(minAge, maxAge);
