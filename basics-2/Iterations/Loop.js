// For

const arr=["batman","doctorstrange","moana"]
for( let index=0 ; index < arr.length; index++){
    const element= arr[index]
    // console.log(`The ${index} index holds ${element}`);
}

// Break and Continue

for (let index = 0; index <= 20; index++) {
    if(index == 6){
        // console.log(`${index} Detected`);
        break
    }
    // console.log(`the index is ${index}`);
    
}

// While

// Make sure the loop does not go to infinity.
let index = 0
while (index <= 5) {
    // console.log(`index is ${index}`);
    index++
}

// do-while

let score=0
do{
//    console.log(`Your score is ${score} `);
   score++
}while(score<=6)

// Higher Order Array Loops

// applied on on objects, arrays, strings
const array=[1,2,3,4,5]
 
// For of loop ----> given below

// for(const iterator of object){
//     // Here object does not refer to javascript object , it refers to iterator we want to apply on.
// }

for (const num of array){
    // console.log(num);            // no increment decrement operator required.
}

// Maps  -------> just like objects but holds unique values and returns key:value in order as entered unlike objects.

const map= new Map()
map.set('Vi',"VISHAL");
map.set('Mi',"Mithlesh");

// console.log(map);    // returns  Map(2) { 'Vi' => 'VISHAL', 'Mi' => 'Mithlesh' }

for(const [key,value] of map){

    console.log(key , ':- ',value); 
    // Vi :-  VISHAL
    //Mi :-  Mithlesh

    // But if same loop applied on objects it returns error though objects are iterable.So,different syntax for objects
}


const myObj= {
    name: 'vishal',
    age: 20
}

//  For in loop returns key whereas for of loop returns key:value both

for( const key in  myObj){
    console.log(`${key} is for ${myObj[key]}`);
}

//Similarly for arrays as well.

