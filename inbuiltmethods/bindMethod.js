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

// var execute1=cellPhone2.details.bind(cellPhone1,"hello","nice")
// execute1()
var execute2=cellPhone1.description.bind(cellPhone2,"hello","nice")
execute2()

// let start=execute.bind(cellPhone1,"hello","nice")
// let start1=execute.bind(cellPhone2,"hello","nice")
// start()
