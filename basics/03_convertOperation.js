let score="33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN => prints Not a number but type is number.  !!! A little different
//true => 1, false => 0

let login= 1
let boolLogIn= Boolean(login)
console.log(typeof login);
console.log(typeof boolLogIn);
console.log(boolLogIn);

//1 => true , 0 => false
//"" => false , " anything " => true

//Same for all Datatypes

/****************OPERATIONS******************/

// let val=3
// let negval=-val
// console.log(negval);

// console.log(2+2)
// console.log(2-2)
// console.log(2/3)           ALL PERFORMS BASIC MATH OPERATIONS
// console.log(2*4)
// console.log(2**1)
// console.log(2%10)

/**********Tricky Ones *************/

console.log(1+"2");   //gives 12
console.log("1"+2);   //gives 12
console.log("1"+2+3); //gives 123
console.log(1+3+"2"); //gives 42

//All rules are given in ECMA standards tc39.es

//But no need to write this above type of messy code instead use parenthesis to establish precedence according to your choice.

console.log(+true); //gives 1   no need to write like this except for understanding.
console.log(+""); //gives 0