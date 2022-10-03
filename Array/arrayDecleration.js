// type 1--> with using new key word
var arr=new Array("prem",25,'d',51.5122)
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]);
}
console.log();
// type 1 main dis advantage
var arr1=new Array(5)
console.log(arr1.length);

console.log();

// type 2--> with out new key word
var arr2=["prem",'d',25,51.33]
for (let index = 0; index < arr2.length; index++) {
    console.log(index+"    "+arr2[index]);
}
