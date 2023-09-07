const number=100

//or

const number1=new Number(100)
console.log(typeof number1);
console.log(number1);

console.log(number1.toString());
console.log(number1.toFixed(2));    //Imp!!

const anotherNumber=98.99
console.log(anotherNumber.toPrecision(2)); //Imp!!

// //Check rest prototype functions on mdn web docs

const num=123809000
console.log(num.toLocaleString());       // returns num seperated by commas in US standards.
console.log(num.toLocaleString('en-In')); //returns num in Indian standards.


//+++++++++++++++++++++++++ Math +++++++++++++++++++++//

// console.log(Math);  //Math itself is a object and has many functions embed in it.
 
console.log(Math.abs(-3));
console.log(Math.round(5.34));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.min(3,7,10,9));
console.log(Math.max(3,2,100,0));

console.log(Math.random());  //IMPORTANT !!!
console.log((Math.random()*6)+1);  // 1 specifies all 0.04,0.02...like cases are now removed.
console.log(Math.floor((Math.random()*6))+1); 

//To get values between in a range of a min and max number

// Eg:-
const min=15
const max=30
console.log(Math.floor(Math.random()*(max-min + 1))+min);

