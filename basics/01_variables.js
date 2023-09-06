/*Javascript is a dynamically typed language  like Python means we don't need to specify the type or datatype of variable 
created or assigned...Eg:- C,C++ etc. are Statcally typed languages i.e datatype is defined during declaration.*/  


const accountId=232435
var password="213455"
let email="vishal00@gmail.com"

//accountId=435656 
/*raises error as const values can't be changed*/

console.log(accountId)

password="78987986"
email="hcc@gmail.com"
console.table([accountId,password,email])

/*var keyword is highly neglected as it is scope(scope means { } like in if condition { }starts its scope) independent....
For eg:-if var name="vishal" is declared outside scope and we change its value in so some scope then it will change its value everywhere
not just in the scope.(block and function scope)*/