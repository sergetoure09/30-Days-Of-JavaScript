// const text="He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// const pattern=/\d+/gi

// console.log(text.match(pattern).map(item=>parseInt(item)).reduce((acc,sum)=>acc+sum,0))

// function is_valid_variable(variable){
//     const pattern=/^[a-zA-Z_][a-zA-Z0-9_]*$/;

//     console.log(pattern.test(variable))
// }

// is_valid_variable('first_name') // True
// is_valid_variable('first-name') // False
// is_valid_variable('1first_name') // False
// is_valid_variable('firstname') // True

// // function is_valid_variable(variable){
// //     const pattern=/^[a-z]+_+[a-z]/gi;

// //     console.log(pattern.test(variable))

// // }

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph, 10));

function tenMostFrequentWords(paragraph, n) {
  const pattern = /\b[a-zA-Z]+\b/g;
  return filterHelper(frequence(paragraph.match(pattern))).slice(0, n);
}

function frequence(aList) {
  let aListSet = new Set(aList);
  let resultList = [];

  for (let item of aListSet) {
    resultList.push({
      word: item,
      count: aList.filter((e) => e === item).length,
    });
  }

  return resultList;
}

function filterHelper(aList) {
  return aList.sort((a, b) => {
    return b.count - a.count;
  });
}
