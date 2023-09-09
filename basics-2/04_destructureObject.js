const user={
    userName:'vishal',
    age: 20
}
//Instead of using user.age, used below method ------->Object Destructuring
const {userName}=user
console.log(userName);

//assign userName as name if need to shorten .----->O/P of above and this statement is same.
const {userName:name}=user
console.log(name);

//API's has JSON format---->javascript object notation
1.
//  {
//     userName:'vishal',
//     age: 20
// }
2.
// [
//     {},
//     {},
//     {},
//     {}
// ]