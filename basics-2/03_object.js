//const oneUser= new Object() -------> Singleton Object

//Non-Singleton Object
const twoUser= {}

twoUser.id="dsojfsfwkcjk123"
twoUser.email="dsojfsfwkcjk123@gmail.com"
twoUser.age=20

console.log(twoUser);

const threeUser={
    name: {
        username : {
        fullname: "vishal",
        lastname: "chauhan",
        }
    },
    age : 20,
    jobs:{
        firstjob:"Machine Learning Scientist",
        secondjob:"Web Developer",
    }
}
//Accessing nested elements of an object

// console.log(threeUser.jobs.secondjob);

const obj1 = {1:"a" , 2: "b"};
const obj2 = {3: "c" , 4: "d"}

const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);
//prints { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(twoUser));
//[ 'id', 'email', 'age' ] ---->returns a list of keys. All list funtions can be applied.

console.log(Object.values(twoUser));
//[ 'dsojfsfwkcjk123', 'dsojfsfwkcjk123@gmail.com', 20 ]

console.log(Object.entries(twoUser));
//[ [ 'id', 'dsojfsfwkcjk123' ],[ 'email', 'dsojfsfwkcjk123@gmail.com' ],[ 'age', 20 ]]
//----->Array in a Array.

console.log(twoUser.hasOwnProperty('id'));
//returns true as it has the given element in it.




