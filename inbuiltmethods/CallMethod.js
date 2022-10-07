var cellPhone1={
    name:"moto",
    colour:"black",
    description:function (value1,value2) {
        console.log("the phone name is "+this.name+" and colour is "+this.colour+".");
        console.log(value1+" "+this.name+". "+this.colour+" colour is "+value2);
    }
}

var cellPhone2={
    name:"nokia",
    colour:"white",
    details:function (value1,value2) {
        console.log(this.colour+" is colour of the "+this.name+" phone.");
        console.log(value1+" "+this.name+". "+this.colour+" colour is "+value2);
    }
}

function execute (value1,value2) {
    console.log(value1+" "+this.name+". "+this.colour+" colour is "+value2);
}
cellPhone2.details.call(cellPhone1,"hello","nice")
// cellPhone1.description.call(cellPhone2)
// execute.call(cellPhone1,"hello","nice")
// execute.call(cellPhone2,"hello","nice")