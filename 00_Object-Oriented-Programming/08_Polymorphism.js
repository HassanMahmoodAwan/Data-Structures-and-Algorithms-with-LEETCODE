/*
*   Polymorphism:
*           1- Many Forms like Person -> Father -> Son -> Husband -> Brother.
*           2- Compile Time & Run Time Polymorphism.
*
*           Compile-Time: 
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
}

class ProductsInventory extends Company{

    static ProductInventoryTypes = ["stitched", "unStitched", "Embroidered"]

    static get classDataMembers(){
        return [this.ProductInventoryTypes, this.companyName]
    }

}


;(function main(){
    const obj = new Company()
    obj.mode = "Online"
    obj.location = "Lahore"
    obj.categories = "Women Wear"

    console.log(obj.displayCurrentContext)

    console.log(Company)
})()