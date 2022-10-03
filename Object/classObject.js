class cellPhone{
    constructor(name,cost,colour,configartion,finalPrice) {    
        this.name=name
        this.cost=function (){return cost} 
        this.colour=colour
        this.configartion=configartion
        this.finalPrice=finalPrice
    } 
}

var n=new cellPhone("nokia",12000,"black",{os:"android",version:"11"},9800)
    console.log(n);