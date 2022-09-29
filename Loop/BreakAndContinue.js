
var a=[100,200,"hi",50,'h',true]
// continue
for (let index = 0; index < a.length; index++) {
    if (index<2) {
        console.log("Prem");
        continue
    }
    console.log(a[index]);
}
console.log();
// breakk
for (let index = 0; index < a.length; index++) {
    if (index<2) {
        console.log("Prem");
        break
    }
    console.log(a[index]);
}