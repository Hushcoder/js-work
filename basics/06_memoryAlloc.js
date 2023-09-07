/***********Memory concepts***********/

// two types of memory:-Stack and Heap 

// Stack----->for Primitive datatypes

// Heap------>for Non-Primitive datatypes

// Stack=>

// This memory is for primitive datatypes....In stack memory, the copy of the variable is stored that is  declared.

// let name="vishal"

// let anotherName=name 
// anotherName="keshav"
// console.log(name); //gives vishal not keshav as just a copy of name given to keshav.
// console.log(anotherName); //gives keshav



// Heap=>

// This memory is for non primitive datatypes....In heap, a reference is created of the variable declared that means if any changes 
// done in it will be reflected directly to the Main .

// let userOne={
//     name:'vishal' ,
//     userId: '123@'
// }
// let userTwo=userOne

// userTwo.userId='324@'
// console.log(userOne.userId);
// console.log(userTwo.userId);