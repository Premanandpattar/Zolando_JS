class sample{

    constructor(value1,value2,value3){
        this.value1=value1
        this.value2=value2
        this.value3=value3
    }

    static a="prem"
    a1="Pattar"

    static demo1(){
        // console.log("calling this static method through inside non satic method");
        // console.log("calling this static method through inside satic method");
    }

    demo2(){
        console.log("calling this non static method through inside satic method");
        // console.log("calling this non static method through inside non satic method");
    }

    static call1(obj){
        // this.demo1()
        obj.demo2()
    }

    call2(){
        sample.demo1()
        this.demo2()
    }

    
}

var s= new sample("Prem","Swaraj","Kiran") 
// s.call2()


sample.call1(s)
