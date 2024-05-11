class Vehicle{
//     instanceVariable
    company  = "Honda"

    constructor(model, make, variant) {
        this.model = model
        this.make = make
        this.variant = variant
    }

    display(){
        return `${this.model}, ${this.make}`
    }
}

const obj  = new Vehicle("Civic", 2001, "ugPackage")
console.log(obj.company)
console.log(obj.display())