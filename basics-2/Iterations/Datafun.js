// Aisa hi hota h databases se data fetch krne ke liye
const books=[
    {bookno:'book1' , title: 'atomic habits', genre:'inspire', pub: '1997'},
    {bookno:'book2' , title: 'the subtle art', genre:'inspire', pub: '1998'},
    {bookno:'book3' , title: 'ikigai', genre:'inspire', pub: '1999'},
    {bookno:'book4' , title: 'canterville ghost', genre:'horror thriller', pub: '1999'},
    {bookno:'book5' , title: 'prejudice', genre:'motivational', pub: '1990'}
]

let data = books.filter((bk) => bk.genre==='inspire')
data = books.filter((bk) => bk.pub>1998 && bk.genre==='horror thriller')                     //   Or  data = books.filter((bk) =>  {return bk.pub>1998})
// console.log(data);


const myNumbers = [1,2,3,4,5,6,7,8,9]
 
const newNums=myNumbers 
              .map((num) => num*10)
              .map((num) => num+1); // Chaining occurs and in this line num gets updated values from above. 
// console.log(newNums);      //prints [11,21,31,41,51,61,71,81,91]

// reduce function (used in react as well)

const myNum= [2,3,4,5,6]
// let currentvalue=0   // either declare here or at last of {}.
const numNew = myNum.reduce(function(accumulator,currentvalue){
    // return accumulator+currentvalue; //----------------->20
},0)
// console.log(numNew);

// above code can be written as follows as well.

const numNews= myNum.reduce((accumulator,currentvalue) => accumulator+currentvalue ,0 )
console.log(numNews);
 