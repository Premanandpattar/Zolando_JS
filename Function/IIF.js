//Immediately invocable function
(sum=function(a,b){
    console.log(a+b);
})(5,10)

(sum=function(a,b){
    console.log(a*b);
})(5,10)
//out put
// PS C:\Users\PREM\Desktop\Zolando_JS> node Function\IIF.js
// 15
// C:\Users\PREM\Desktop\Zolando_JS\Function\IIF.js:6
// (sum=function(a,b){
// ^

// TypeError: (intermediate value)(intermediate value)(...) is not a function
//     at Object.<anonymous> (C:\Users\PREM\Desktop\Zolando_JS\Function\IIF.js:6:1)