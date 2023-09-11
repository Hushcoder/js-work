// Global and Local Scopes done.

//Function in a function input

function one(){
    const name="vishal"
    function two(){
        const age="20"
        console.log(name);
    }
    //console.log(age)----->returns error as scope of age is inside upto two() function only. 
    two()
}
one()
//Child functions can access values of Parent functions.

if(true){
    const userName="vishal"
    if(userName==="vishal"){
        const age= 20
        console.log(userName+age);
        console.log(typeof age);
    }
    //console.log(age);---->returns error.
}

//+++++++++++++++++INTERESTING++++++++++++++++++++

add(4)
function add(num){
    return num+1
}
//function return a value if func. called before initialisation.

addTwo(3)
const Two=function addTwo(num){
    return num+1
}
/*The above function returns error as Though Its called before initialisation but
it is stored in a variable too. This is known as Javascript Hoisting.*/  