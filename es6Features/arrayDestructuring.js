// array decleration
var arr=["prem","anand",1,52.3]

// case 1 : accessing elements of an array in normal way
let x=arr[0]
let y=arr[1]
console.log(x,y);

// case2: accessing first 2 elements of an array 
let [a,b]=arr
console.log(a,b);

// case3: accessing first 3 elements of an array 
let [m,n,o]=arr
console.log(m+n+o);

// case4: accessing elements of an array by skipping the elements in between

let [d,,,,,g]=arr
console.log(d,g);
