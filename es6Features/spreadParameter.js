// to convert string each caracter into in form of array
// var name1="Premanand"
// var arr=[...name1]
// console.log(arr);

// combining two array store in one array
// var arr1=[10,20,30]
// var arr2=[40,50,60]
// var arr3=[...arr1,...arr2]
// console.log(arr3);

// var arr1=[10,20,30]
// var arr2=[...arr1,40,50,60]
// console.log(arr2);

// combining two object

var personal_details={
    FirstName:"Premanand",
    LastName:"Pattar",
    sallary:10000
    
}

var company_details={
    companyName:"TYSS",
    location:"kartigupe",
    sallary:15000
}



// var employDetails={...personal_details,...company_details}
// console.log(employDetails);

var personal_details={...personal_details,...company_details}
console.log(personal_details);

// copying one object to other object 
// var d ={...personal_details}
// console.log(d);


