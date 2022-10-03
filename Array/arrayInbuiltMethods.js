var array =[1,2,3,4]//, 40, "30", 50, "60"]
// Array.concat() method
var array1 = [1, 56, 56, 6]
// console.log(array);
// console.log(array.concat("prem"));
// console.log(array);

// // array.push()--> it will add the element at the last
// console.log(array);
// console.log(array.push(array1));// it will print size of the array
// console.log(array);
// var r=array[2].indexOf(56)
// console.log(r);

// // //array.pop()--> it will remove last element
// console.log(array);
// console.log(array.pop());// it will print the last removed element 
// console.log(array);

// array.unshift() --> it will add the element at first & shift the initial position of the indexs
// console.log(array);
// console.log(array.unshift("4566"));
// console.log(array);

// array.shift() -->it will delete the first element
// console.log(array);
// console.log(array.shift());
// console.log(array);

// array.splice(start index, delete count, new element)
// console.log(array);
// // console.log(array.splice(0,2,50));
// console.log(array.splice(1,2,50));
// console.log(array);

// array.slice()
// console.log(array);
// console.log(array.slice(1,3));
// console.log(array);

// array.every()
// console.log(array);
// console.log(array.every((element)=>{
//     return element==30
// }));
// console.log(array);

// array.some()
// console.log(array);
// console.log(array.some((ele)=>{
// return ele<30
// }));
// console.log(array);

// array.indexOf()
// console.log(array);
// console.log(array.indexOf(20,0));
// console.log(array);

// array.lastIndexOf()
// console.log(array);
// console.log(array.lastIndexOf(40,3));
// console.log(array);

// array.reverse()
// console.log(array);
// console.log(array.reverse());
// console.log(array);

// array.includes()
// console.log(array);
// console.log(array.includes("60"));
// console.log(array);

// array.join()
// console.log(array);
// console.log(array.join(" Prem "));
// console.log(array);

// array.forEach(()=>{})
// console.log(array);
// array.forEach((element,index)=>{
//     console.log(index+"   "+element);
// })
// console.log(array);

// array.map()
// console.log(array);
// console.log(array.map((element)=>{
//     return element*2;
// }));
// console.log(array);

// array.filter()
// console.log(array);
// console.log(array.filter((element)=>{
//    return element>1
// }));
// console.log(array);

// array.sort()
console.log(array);
console.log(array.sort((a,b)=>{
    return a-b
}));
console.log(array);
// console.log(array.sort((a,b)=>{
//     return b-a
// }));
// console.log(array);

// array.reduce()
// console.log(array);
// console.log(array.reduce((a,b)=>{
// return a-b
// }));
// console.log(array);

// array.reduceRight()
// console.log(array);
// console.log(array.reduceRight((a,b)=>{
// return b-a
// }));
// console.log(array);

