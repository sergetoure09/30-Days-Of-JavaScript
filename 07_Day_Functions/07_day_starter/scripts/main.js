const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// function arrayReducer(arr) {
//   const sum = arr.reduce((acc, item) => acc + item.length, 0);
//   return sum;
// }
// console.log(arrayReducer(countries)); // 15

//unlimited number of argument
// const sum = (...arguments) => {
//   for (let i of arguments) {
//     console.log(i);
//     //return arguments.reduce((acc, item) => acc + item, 0);
//   }
// };

// sum(1, 2, 3, 4, 5); // [1,2,3,4,5]

// anonymous function
// const anonymousFun = function () {
//   console.log(
//     "I am an anonymous function and my value is stored in anonymousFun"
//   );
// };
// console.log(typeof anonymousFun()); // function

// self invoking function
// let selfInvoking = (function () {
//   console.log("I am a self invoking function");
// })();

// let varCountries = (function (params) {
//   let v = "";
//   for (let i of params) {
//     v += i;
//   }
//   return v;
// })(countries);

// console.log(varCountries); // undefined


// console.log((function(n){
//   return n*n;
// })(5)); // 25)


// console.log(countFunc(1, 2, 3)); // 3
// function countFunc(){
//   return arguments.length
// }
//  const myFunc=(...args)=>{
//   console.log(args.length)
//  }

//  myFunc(1,2,3,4,5,6,7,8,9,10) // 10
//  // function with default parameter
// function add(a, b = 5) {
//   return a + b;
// }
// console.log(add(10)); // 15

// function addFunc(b,args=[1,2023,2024]) {
//   return args.reduce((acc, item) => acc + item +b, 0);
// }

// console.log(addFunc(1));

function fullName(firstName="Serge", lastName="Toure") {
  return `${firstName} ${lastName}`;
}
console.log(fullName()); // John Doe
// console.log(fullName("John")); // John undefined
// console.log(fullName()); // undefined undefined

function solveLinEquation(a, b, c, x, y) {
  return (a * x) + (b * y) + c;
}

// Example usage:
console.log(solveLinEquation(1, 2, -3, 4, 5)); // 1(4) + 2(5) + (-3) = 11

function solveQuadEquation(a = 0, b = 0, c = 0) {
  if (a === 0) return 'Not a quadratic equation';
  
  const discriminant = b * b - 4 * a * c;
  
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  } else {
    return [];
  }
}

// Examples:
console.log(solveQuadEquation(1, 4, 4));     // [-2]
console.log(solveQuadEquation(1, -1, -2));   // [2, -1]
console.log(solveQuadEquation(1, 7, 12));    // [-3, -4]
console.log(solveQuadEquation(1, 0, 0));     // [0]

function dateTime(){
 console.log(new Date().toLocaleString())
}

dateTime() // 10/7/2023, 4:00:00 PM

//function swap value
function swap(a, b) {
  return [b, a];
}


const n=5;
const m=8;
function greee(){
  const pw='dbdcbdbcdbsbJnJ5743';
  
  let idList=[];
  for (let i=0; i<n; i++){
    let ids="";
    for (let j=0; j<m; j++){
      ids+=pw.charAt(Math.floor(Math.random()*pw.length));
    }
    idList.push(ids);
  }
  return idList;
  
}


let idList = greee();
console.log(idList);