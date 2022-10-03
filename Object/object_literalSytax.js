var moto={
    cost:12000,
    screenSize:"6.7 inches",    
    colour:"black",
    configartion:{os:"anroid",version:10},
    finalPrice:()=>{
        return moto.cost*0.80}
}

// console.log(moto);
console.log(moto.configartion.os);
moto.networkSupport=["5G","4G","3G","2G"];
// console.log(moto);
// moto.finalPrice=()=>{
//     return moto.cost*0.80}
// console.log(moto.finalPrice());

// adding the property and deleteing the property
// moto.serise="11g"
// console.log(moto);
// console.log(delete moto.serise);
// console.log(moto);

console.log(moto.colour);

//printing full object inside the one object
console.log(moto["configartion"]);
console.log(moto.networkSupport[0]);



