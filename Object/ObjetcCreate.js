var moto={
    cost:12000,
    screenSize:"6.7 inches",    
    colour:"black",
    configartion:{os:"anroid",version:10},
    finalPrice:()=>{
        return moto.cost*0.80},
    productDetails:function(){
        return "the mobile cost is "+this.cost+" and  colure is "+this.colour+"."
    }
}

var nokia = Object.create(moto)
console.log(nokia);
nokia.cost=15000
nokia.screenSize="6 inches"
nokia.colour="white"
nokia.configartion={os:"anroid",version:11}
nokia.finalPrice=()=>{return nokia.cost*0.80}

// console.log(moto)
// console.log(nokia);
// console.log(moto.finalPrice());
// console.log(moto);
// console.log(nokia.cost);
// console.log(moto.productDetails());
// console.log(nokia.productDetails());
