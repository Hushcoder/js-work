//arrays

const Arr=[1,2,3,4,5]

// arrays have key as well like objects by default it starts by 0 and are numbers only.

// const Hero=["batman","spiderman","krishna"]
// const newArr=["batman","harleyQuinn",1,2]

// const Arr2=new Array(1,2,3,4)// automatically adds [].

//Arrays have shallow copies rather than deep copies.

/*Shallow copy is a copy of an object whose property points to same reference
Deep copy is a copy whose object property does not have point to reference */

// console.log(Arr[0]);


//For all functions/methods of array go to mdn webdocs or console.

Arr.push(6);
// console.log(Arr);
Arr.pop()

Arr.unshift(10)  // Adds 10 to the beginning of the array.
Arr.shift()      // deletes the added element.
console.log(Arr);

console.log(Arr.includes(10));
console.log(Arr.indexOf(3));

const newArr= Arr.join() // converts list to string
console.log(newArr);
console.log(newArr.slice(-1,1));
console.log(typeof newArr);

//slice and splice methods

/****In slice,the 2nd limit is not included and sliced portion is printed with no change in array but in splice,both limits are included
 and the spliced portion is printed and the array gets manipulated and the left elements are printed. ****/

console.log('A', Arr);
console.log(Arr.slice(1,3));
console.log('B',Arr);
console.log(Arr.splice(1,3));
console.log('C',Arr);