var arr=[1,"prem",'f',55.6,true]
//for loop
for (let index = 0; index < arr.length; index++) {
    console.log(index+"  "+arr[index]);
}
console.log();
//for in
for (const index in arr) {
    console.log(index+"  "+arr[index]);
}
console.log();
// for off
for (const iterator of arr) {
    // console.log(arr[iterator]);
    console.log(iterator)   
}