// if , if-else , if-elif-else

/*if(condition){
    //statements
}
else{
    //statement
}*/

// if(condition) statement1,statement2,......,statementn; considered to be in scope namely implicit scope.....But not recommended.
 
// Operators <,>,<=,>=,!=,!==,==,===,||,&&

//Switch statements

/*switch(key){
    case vlaue:
        Statement
        break;

    default:
        break;
}*/

// const userName = "vishal" , but if we give here empty string--->the condition turns false but true in case of [] empty List.
const userName = ""
if(userName){
    console.log(`Ya you are ${userName}`);
}
else{
    console.log("OOPS");
}

// falsy values like "" are false,0,-0,BigInt 0n,Null,undefined,NaN,"".
//truthy values are "0","false"," ",[],{},function(){}--->empty functions.

// Nullish Coalescing Operator (??) :- null undefined.

// val1 = null ?? 10
// console.log(val1);----->returns 10 because this ?? checks Safety when value is  null and at place of 10 is assigned function as well.... 

// val2= null ?? 10 ?? 20
// console.log(val2);----->returns 10 that the first value assigned.

// //Ternary Operator

// condition ? true : false