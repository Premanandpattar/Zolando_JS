//note 1
var a="Prem"
console.log(typeof(a));// data type is String
a=20
console.log(typeof(a));// data type is Number

// note 2 
var s="10"
console.log(typeof(s)); //data type is String
var f=Number(s) // explicitly changed the data type then stored in f
console.log(typeof(f));// data type is Number


//note 2 diff == and ===
var a=50
var b="50"
     // == is compare the value
if (a==b) {
    console.log("The a and b are the same");
} else {
    console.log("The a and b are the not same");
}
// === is compare both value and data type
if (a===b) {
    console.log("The a and b are the same");
} else {
    console.log("The a and b are the not same");
}

//note 4  pre incriment and post incriment
var v=10
console.log(v);
result1=++v //pre incriment-->> incriment the first then initialize the identifier
console.log(result1);
result2=v++ //post incriment-->> initialize the first then incriment the identifier
console.log(result2);
console.log(v);

//note 5 variables types
//         Re-decleration	  Re-initialization			
// 1 var    possible	         possible
// 2 let	 not possible	     possible
// 3 const	 not possible	     not possible