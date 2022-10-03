function add(a,b) {
    console.log("addtion function started");
    result=a+b
    console.log("addtion function ended");
    return result
}

function calculate(a,b,fun) {
    console.log("calculate function started");
    console.log(fun(a,b));
    console.log("calculate function ended");

}

function mul(a,b) {
    console.log("multiply function started");
    result=a*b
    console.log("multiply function ended");
    return result
}
calculate(5,6,add)
console.log();
calculate(5,6,mul)