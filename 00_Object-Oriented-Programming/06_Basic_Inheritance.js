class ClothingStore{
    // Private
    #CompanyName = "Zainab Attire"

    // Class Properties
    static #description = "Hello to the Store"

    static get getDesc(){
        return this.#description
    }

    constructor(nich, mod, size) {
        this.niche = nich
        this.mode = mod

        // Protected
        this._size = size

        // Private
        let ceo = ""

        this.getCeo = function (){
            return ceo
        }
        this.setCeo = function (c){
            ceo = c
        }
    }

    get getCompanyName(){
        return this.#CompanyName
    }
    set setCompanyName(name){
        this.#CompanyName = name
    }
}


class ProductInventory extends ClothingStore{

    constructor(niche, mode, sizes, no_Products) {
        super(niche, mode, sizes);
        this.noOfProducts = no_Products
    }

    get displayData(){
        return `${this.niche} ${this._size} ${this.noOfProducts} ${this.getCeo()}`
    }
}


// OBJECTS / Instances
const obj = new
            ProductInventory("Women Wear", "Online", "5-10", "20")

obj.setCeo("M.Mahmood")
console.log(obj.displayData)
console.log(obj._size)       // Don't use this way Accessing Protected property.

obj.setCompanyName = "Zainab-Attire"
console.log(obj.getCompanyName)


console.log(ProductInventory.getDesc())         // Not working
