const date=new Date()
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());

//In Js month start with 0--->Jan

// let createDate=new Date(2023,2,23)// (year,month,date)
// console.log(createDate);

// let createDate=new Date(2023,0,23,6,8) //(year,month,date,hours,minute,sec)
// let createDate =new Date("2/13/2023")

let myCreateDate=new Date("02-13-2023") //MOST PREFERED FORMAT OF DATE
// console.log(myCreateDate.toLocaleString());

// let myTime=Date.now()
// console.log(myTime);
// console.log(myCreateDate.getTime());

//Both returns the time in milliseconds from(1970).

//For milliseconds to seconds / by 1000 and use round or floor to avoid decimals.

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));
console.log(myCreateDate.anyfunction);


//MANY functions are there for accesing date,month,day etc. go to mdn web docs or console

let myDate= new Date()
console.log(mydate);
let newDate = mydate.toLocaleString()
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getDay());

// myDate.toLocaleString('default',{
//     weekday: 'long'
// })


