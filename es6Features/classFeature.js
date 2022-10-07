class zolando {

    constructor(categoryName, subCategoryName, products){
        this.categoryName=categoryName
        this.subCategoryName=subCategoryName
        this.products=products
    }
    
    static admin_name="admin"
    user_count=1023
    
    static adminAccess(){
        console.log(this.admin_name);
    }

    details(){
        console.log(this.categoryName);
        console.log(this.subCategoryName);
        console.log(this.products);
    
    }
    
    access1(){
        console.log(zolando.admin_name); // access static variable in non satic method
        console.log(this.user_count); // access non static variable in non satic method
        // if we used this key word inside non satic method it will load all non static variables 
        // and non static methods
        // console.log();
    }

    static access2(){
        console.log(this.admin_name); // access static variable in satic method
        // if we used this key word inside satic method it will load all static variables and static methods
        let p= new zolando() // create the object standard way this is
        console.log(p.user_count); // access non static variable in satic method
    }

    // accessing static method inside static method
    static demo1(){
        this.adminAccess()
    }

    // accessing static method inside non static method
    demo2(){
        zolando.adminAccess()
    }

    // accessing non static method inside non static method
    demo3(){
        this.details()
    }

    // accessing non static method inside static method
    static demo4(obj_ref){
        obj_ref.details()
    }
}

var data1= new zolando("fashion","men",["shirt","pant","shoes","belt"])
// data1.details(); // non static method access
// zolando.adminAccess(); // static method access
// console.log();
// console.log(data1.user_count); // non static variable access
// console.log(zolando.admin_name); // static variable access
// data1.access1()
// zolando.access2()
// zolando.demo1()
// data1.demo2()
// data1.demo3()
// zolando.demo4(data1)


