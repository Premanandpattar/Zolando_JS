// function demo (fName,lName,...skills){
//     console.log(skills);
// }

// demo("Prem","Pattar","java","selenium","JS","API")

var{fName,lName,...otherdetails}={
    fName:"Prem",
    lName:"Pattar",
    age:27,
    hieght:"171 cm",
    weight:"75 kg",
    skills:["java","selenium","JS","API"]
}

console.log(otherdetails);
console.log(fName);
console.log(lName);
