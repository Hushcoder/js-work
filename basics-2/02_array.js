const americanHeroes=["batman","superman","ironman"]
const indianHeroes=["shaktiman","krishna"]

// americanHeroes.push(indianHeroes) // pushes the whole list as a whole element.
// console.log(americanHeroes);

// const Arr2=americanHeroes.concat(indianHeroes)// spreads the elements in a list as individual elements.
// console.log(Arr2);


// spread Operator is used mostly, ...parameter1,...parameter2,... can take as many parameters. 
// const Arr3=[...americanHeroes, ...indianHeroes] // ... is the spread function that also spreads the elements in a list as individual elements.
// console.log(Arr3);

// flat(depthParameter), Here depth parameter can be user based or to all Infinity.
// const arr=[1,2,3,[4,5,6],[7,8,[9,10]]]
// console.log(arr.flat(Infinity)); 
/* Infinity is a parameter that is set as the depth upto which the elements have to be spread completely,
though it can be set manually as well.*/ 

console.log(Array.isArray("vishal"));

console.log(Array.from("vishal")); // gives an array of each alphabet in ' '.  
  
console.log(Array.from({name:"vishal"})); // Interesting case as it return an empty list.

let name1="vishal"
let score=100
let status="fail"

console.log(Array.of(name1, score, status)); // of Operator converts combines given variables into an array.
