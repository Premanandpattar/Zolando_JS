//case 1

// var  add =function(a,b){
//     return a+b
// }

// console.log(add(5)); //out put NaN (not a number)

//case 2
// var  add1 =function(a,b=1){
//     return a+b
// }
// console.log(add1(5));  //out put 6

// var  add1 =function(a=1,b){
//     return a+b
// }
// console.log(add1(5));  // NaN

// case 3

// var  add1 =function(a,b=1){
//     return a+b
// }
// console.log(add1(5,10));  //out put 10

//case 4  difault parameter with constructor

class d{
    constructor(a=1,b=1){
         console.log(a+b)
    }
}
new d(10,20)