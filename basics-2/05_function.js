function addTwoNumbers(n1,n2){
    let res=n1+n2
    return res
}
const re = addTwoNumbers(3,4)
console.log("result: ", re );

function loginUser(userName){
    return `${userName} just logged in`
}
console.log(loginUser("vishal"));
console.log(loginUser());   // returns Undefined for userName and then followed by sent.

//Methods to create objects:

//singleton------> always created using Constructor.
//Object.Create
//Object literals

const user1={
    name:"vishal",  //Eg:- The compiler reads name key,even all keys as a string only whatever the  value is.
    "fullname":"vishal chauhan",
    age:20,
    email:"vishal@google.com",
    isLoggedIn: true
}
// console.log(user1.age);

// console.log(user1["age"]); //Best method to access any element of the object. 
// console.log(user1["fullname"]);

//Add and access Symbol in a Object.

const num= Symbol("key1")
const user2={
    name:"vishal", 
    "fullname":"vishal chauhan",
    num:"mykey",    //Mistake done
    /*If we access the value of num now then it returns as mykey that is correct but if we check the typeOf num
     it is string not symbol.*/
    age:20,
    email:"vishal@google.com",
    isLoggedIn: true
}

//To make it a symbol put it in [].

const user3={
    name:"vishal", 
    "fullname":"vishal chauhan",
    [num]:"mykey", 
    age:20,
    email:"vishal@google.com",
    isLoggedIn: true
}
// console.log(user3[num]);
// console.log(typeof [num]);

user3.name="keshav"
console.log(user3);

//To inhibit any changes after an instant use Object.freeze(objectName).

Object.freeze(user3)

user3.name="vishal"
// console.log(user3);

//Add greeting for user

user3.greeting= function() {
    console.log("Hello user 3");
}
console.log(user3.greeting);


//Rest operator is similar to spread operator.

// function calculateCartPrice(...num1){
//      return num1
// }
// console.log(calculateCartPrice(200 ,400, 500)); // gives [200,400,500]

// function calculateCartPrice(val,val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200 ,400, 500,2000));// gives a list of [500,2000]

//Passing an object

const user={
    name:"vishal",
    salary: "1.1Cr"
}

function handleObject(user){
     console.log(`Username is ${user.name} and Pay is ${user.salary}.`);
}
// handleObject(user)
//or pass direct object


handleObject({
    name:"vishal",
    salary:"20Lakhs"

})

//Passing Array 

const newArray=[1,2,3]

function thirdValue(giveArray){
    return giveArray[2]
}
console.log(thirdValue(newArray));
