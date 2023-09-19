const lang=['python','c++','C','ruby','javascript','SQL']

lang.forEach(function(Listitem){
    // console.log(Listitem);
})

lang.forEach((Listitem)=> {
    // console.log(Listitem);
})

lang.forEach((Listitem,index,lang)=> {
    console.log(Listitem,index,lang);
})
/*
returns :-
python 0 [ 'python', 'c++', 'C', 'ruby', 'javascript', 'SQL' ]
c++ 1 [ 'python', 'c++', 'C', 'ruby', 'javascript', 'SQL' ]
C 2 [ 'python', 'c++', 'C', 'ruby', 'javascript', 'SQL' ]
ruby 3 [ 'python', 'c++', 'C', 'ruby', 'javascript', 'SQL' ]
javascript 4 [ 'python', 'c++', 'C', 'ruby', 'javascript', 'SQL' ]
SQL 5 [ 'python', 'c++', 'C', 'ruby', 'javascript', 'SQL' ]
*/ 

const c=lang.forEach((item)=> {
    console.log(item);
    return item // returns undefined in any case.
})
console.log(c);

const nums = [1,2,3,4,5,6,7,8,9]

//filter also takes callback and condition.
const num = nums.filter((numz) => numz>3) 
console.log(num);

//if scope used in filter then return used for explicit return.

const num1= nums.filter((nu) =>{ return nu>3}) 
console.log(num1);

