var moto={
    cost:12000,
    screenSize:"6.7 inches",    
    colour:"black",
    configartion:{os:"anroid",version:10},
    finalPrice:function(){
        return this.cost*0.80},
    productDetails:function(){
        return "the mobile cost is "+this.cost+" and  colure is "+this.colour+"."
    }
}

var lenovo=moto
// lenovo.__proto__=moto
// console.log(lenovo.__proto__.colour);
// lenovo.__proto__.screenSize="vshb"
// lenovo.colour="white"
// lenovo.screenSize="5 inches"
// console.log(lenovo);