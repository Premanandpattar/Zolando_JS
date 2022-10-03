var category={
   categoryName:"fashion",
    sub:function () {
        var subCatagoryName ="men"
        return "the category name is "+this.categoryName+" and sub categoryName is "+subCatagoryName+"."
    }
    
}

var category2={
    categoryName:"electronce",
    sub:function () {
        var subCatagoryName ="phone"
        console.log(category.sub());
        console.log("the category name is "+this.categoryName+" and sub categoryName is "+subCatagoryName+".");
    }
}
category2.sub()