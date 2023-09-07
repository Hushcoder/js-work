let name='vishal'
let age =20
// console.log("my name is "+name+" and i am "+age+" years old.");  ------> old way of writing.

/*Modern Syntax for writing strings*/

// ` `,${}--->String Interpolation , ${} are placeholders which hold some variable and can be modified.

console.log(`my name is ${name} and i am ${age} years old`);

/*Another way of declaring string*/

let myName= new String('Vishal');
 
/*****The above has Returntype an OBJECT i.e key:value pairs with many prototype functions associated with strings*********/

//To access prototype

console.log(myName.__proto__);

//Functions like toUpperCase(),toLowerCase() etc. and many more.....To check them go to brower console in developer tools.

console.log(myName.toUpperCase());
console.log(myName.length);


//All above statements prints
/* my name is vishal and i am 20 years old
{}
VISHAL
6*/

// console.log(myName.charAt(3));
// console.log(myName.indexOf('i'));
// console.log(myName.substring(0,2)); //No negative index can be given
// console.log(myName.slice(-5,-1));  // can work on negative index as well.

// let newName='   vishal    '
// console.log(newName);
// console.log(newName.trim());

//replace(searchValue,replaceValue) function

const url="https://vishal.com/vishal%20chauhan"
console.log(url.replace('%20','='));

//includes(value) function searches that value in string and returns boolean O/P.
 
console.log(url.includes('vishal'));

//split(seperator) or split(seperator,limit) 

let Name='hello I am vishal'
console.log(Name.split('-'));

