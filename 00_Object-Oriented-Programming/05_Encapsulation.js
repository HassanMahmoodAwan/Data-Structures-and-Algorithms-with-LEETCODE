/*
*   Public property  :  class, Child-Class, Instance
*   Projected        :  class, Child-Class
*   Private          :  class
* */

// ==== Getter-Setter Methods =====


class Clothing_Store{
    // Private Var
    #storeName = "Zainab Attire"

    constructor(niche, mode){
        // Public Var
        this.nich = niche;
        this.mod = mode;

        // Private/local Var,   Getter/Setter with-in function Scope
        let location = "Lahore"

        this.getLocation = ()=>{
            return location
        }
        this.setLocation = (loc)=>{
            location = loc
        }
    }

    get storeName(){
        return this.#storeName
    }
    set setStoreName(name){
        this.#storeName = name
    }



    _privateMethod(){
        return "Private Method"
    }
}
const obj = new Clothing_Store()
obj.niche = "Women Wear"
obj.mode = "Online"
obj.setStoreName = "Zainab-Attire"
console.log(obj.storeName)

obj.setLocation("Pakistan")
console.log(obj.getLocation())

console.log(obj._privateMethod())