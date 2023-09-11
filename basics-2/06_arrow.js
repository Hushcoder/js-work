// "this" keyword refers to the new current context(values). It only works in objects not in functions.
//Arrow Function
user={
    userName:"vishal",
    userId:"asfaf123",

    WelcomeMessage: function(){
        console.log(`${this.userName},Welcome Here.`);
    }
}
user.WelcomeMessage()
user.userName="keshav"
user.WelcomeMessage()

function pasta(){
    let userName="vishal"
    console.log(this.usernName);//returns undefined as this does not work in functions.
}
pasta()

const pastaa= function(){
    let userName="pesto"
    console.log(this.userName);//returns undefined as well. 
}

//Arrow function------> replace function with () => 
const pesta= () => {
    let userName="ItalianPesto"
    console.log(this.userName);
}
pesta()

const addTwo1= (n1,n2) => {
    return n1+n2
}

//Implicit arrow function when one line O/P to be printed.

const addTwo = (n1,n2) => n1+n2
console.log(addTwo(3,5));

//Returning Object---->always wrap them in ().

const addTwo3= (num1,num2) =>({userName: vishal})
console.log(addTwo3(1,2));
//prints {username:"vishal"}