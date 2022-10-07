console.log("start");
setTimeout(() => {
    console.log("1st method");
}, 1000);

setTimeout(() => {
    console.log("2nd method");
}, 2000);

setTimeout(() => {
    console.log("3rd method");
}, 3000);

setTimeout(() => {
    console.log("4th method");
}, 4000);

setInterval(() => {
    console.log("interval method");
}, 1000);

console.log("End");


