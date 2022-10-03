//diff All Loops And ForEach Method
var arr=[10,,30,,50]
//for loop --> it will not ignor the unassigned value
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index])
} //out put
// 0    10
// 1    undefined
// 2    30
// 3    undefined
// 4    50
console.log();


//for of --> it will not ignor the unassigned value
for (const i of arr) {
    console.log(i);
}//out put
// 10
// undefined
// 30
// undefined
// 50
console.log();

//for in --> it will ignors the unassigned value
for (const key in arr) {
    console.log(key+"   "+arr[key])
 } // out put
// 0   10
// 2   30
// 4   50
console.log();


// for each method --> it will ignors the unassigned value 
arr.forEach((ele,index,arr)=>{
console.log(index+"   "+ele);
}) // out put
// 0   10
// 2   30
// 4   50