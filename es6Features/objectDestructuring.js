var moto={
    cost:12000,
    screenSize:"6.7 inches",    
    colour:"black",
    configartion:{os:"anroid",version:10},
    finalPrice:()=>{
        return moto.cost*0.80}
}

// case 1:  normal method
var data1=moto.cost
var data2=moto.configartion.os
console.log(data1);
console.log(data2);

// case 2: 
 var {cost}=moto
 console.log(cost);
 var {os}=moto.configartion
 console.log(os);

 // case 3:
var {cost:price}=moto
console.log(price);
