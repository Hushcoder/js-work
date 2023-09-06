// console.log(1>2);
// console.log(1>=2);
// console.log(1==2);
// console.log(1!=2);
// console.log(1<=2);

/******************Cofusing Part when comparing different datatypes************/

//console.log("1">2);  gives false
//console.log("03">=1); gives true     // Try to have arguments with similar Datatypes

// console.log(null > 0); gives false
// console.log(null < 0); gives false
// console.log(null == 0);gives false

// //  IMPORTANT !!!!
// console.log(null >= 0);    gives true   bcoz Comparisons converts null to a number
// console.log(null <= 0);    gives true

// strict check === checks value as well as datatype.
console.log("2"===2);