class Clothing_Store{
    // === Instance Var
    storeName = "Zainab Attire"

    // Constructor Method
    constructor(category, location, mode) {
        this.category = category;
        this.location = location;
        this.mode = mode;
    }
    // Instance Methods
    get displayStoreName(){
        return this.storeName
    }
    storeType(){
        return `${this.category} in  ${this.location} and selling ${this.mode} !`
    }
}

// Clothing_Store("Women", "Lahore", "Online").storeName) Not Accessible through Class, need Instance.
let obj = new Clothing_Store("Women", "Pakistan", "Online")
obj.storeName = "Zainab-Attire"             // Changes Value
obj.category = "Eastern Women Wear"         // Changes as well
console.log(obj.displayStoreName)
console.log(obj.storeType())
