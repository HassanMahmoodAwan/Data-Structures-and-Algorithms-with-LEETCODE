/*
*   Polymorphism:
*           1- Many Forms like Person -> Father -> Son -> Husband -> Brother.
*           2- Compile Time & Run Time Polymorphism.
*
*           Compile-Time: 
                ==> Before Excecution of Code, Our code is syntactically and semantically Correct.
            Run-Time :
                ==> After Exceution, how our Code behaves is its Run time Excecution.

    Types of Polymorphism:
        1- Compile-Time Poly...:
                ==> Before Exceution of Code, we have mulitple methods with same name but different parameters, shows polymorphism.
        2- Run-Time Poly...:
                ==> After exceution, we find that which method is exceuted like in Method overriding.

            
* */


class Company{
    // Instance data members
    types = ["Fancy, ReadyTo wear", "Embroidered"]
    // Class data members
    static companyName = "Zainab Attire"

    constructor(mode, location, categories) {
        this.mode = mode;
        this.location = location;
        this.categories = categories;
    }

    get displayCurrentContext(){
        return this
    }

    static get displayClassCurrContext(){
        return this
    }

    
    // Method Overloading:
    companyDetails(){
        return "This Company have this this this"
    }
    companyDetails(location){
        return `${location} and this this this`
    }

    

}

class ProductsInventory extends Company{

    static ProductInventoryTypes = ["stitched", "unStitched", "Embroidered"]

    static get classDataMembers(){
        return [this.ProductInventoryTypes, this.companyName]
    }

    constructor(mode, location, categories, Products_Details = new Array()){
        super(mode, location, categories)
        this.prodDetails = Products_Details
    }

    companyDetails(location){
        return "Method Overrided which is Overloaded in Parent Class " + location
    }

}


;(function main(){
    const obj = new Company()
    obj.mode = "Online"
    obj.location = "Lahore"
    obj.categories = "Women Wear"

    console.log(obj.displayCurrentContext)
    console.log(Company.displayClassCurrContext)

    console.log(ProductsInventory.classDataMembers);

    const prodObj = new ProductsInventory()
    console.log(prodObj.companyDetails())


})()