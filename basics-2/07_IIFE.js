// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

//function to be executed immediately after execution.

//IIFE forms in ()().First bracket for function declaration and other for calling. 
//IIFE is used to reduce or replace the pollution created by global scope variables as child can use parent's variables. 

//named IIFE
(function Db(){
    console.log("Database Connected.");
})();

/*semicolon needed after above function call to execute the otherwise it will generate error in next function call because the function does
not know where to end. */

//unamed IIFE
(() => {
    console.log("You are stupid.")
})();

((name) => {
    console.log(`My name is ${name}`);
})('vishal')