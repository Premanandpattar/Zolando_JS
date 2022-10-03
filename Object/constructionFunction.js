function cellPhone(name,cost,colour,configartion,finalPrice) {    
    this.name=name
    this.cost=function (){return cost} 
    this.colour=colour
    this.configartion=configartion
    this.finalPrice=finalPrice
}

var n=new cellPhone("nokia",12000,"black",{os:"android",version:"11"},9800)
console.log(n);



























// var m=new cellPhone("moto","white")
// console.log(m);

// //related to project

// function createCategory(categoryName) {
//     this.categoryName=categoryName
// }

// var a= new createCategory("fashion")
// console.log(a);