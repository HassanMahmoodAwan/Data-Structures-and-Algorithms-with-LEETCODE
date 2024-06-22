function Add5(){
    return 5+ 10
}
console.log(Add5.prototype)         // {}


function Users(){
    this.userName = "Hassan"
    this.userId = 1

    console.log(this);
}
Users()

Users.prototype.city = "Lahore"
console.log(Users.prototype)            // { city:"Lahore" }

Users.userName                          // Undefined (private).
const obj = new Users()
console.log(obj.city)                   // Lahore



// ====== Prototype Chain =======
Object.entries(Users)                // Access as Function is Func as well as Object.

// Prototype Hierarchy
Object.prototype.topLevelMsg = function(){
    console.log("Access by All");
}
console.log(Users.topLevelMsg())    // Running, but also return Undefined

Array.prototype.arrayLevelMsg = "Only Array can Access"
Users.arrayLevelMsg     // Not working as Object than Function or Array.



// ==== Question : Trim Length of String from both-side using Prototype.

String.prototype.trimLength = function(){
    const tempArray = this.split("")
    const Length = tempArray.length
    let counter = 0
    let left = 0, right = Length - 1;

    while(true){
        if (counter >= Length){
            break
        }
        if (tempArray[left] !== " " && tempArray[right] !== " " ){
            break;
        }
        if (left >= right){
            break
        }
        if (tempArray[left] === " "){
            tempArray.splice(left, 1)
            left++
        }
        if (this[right] === " "){
            tempArray.splice(right, 1)
            right --
        }
        counter++;
    }
    return [tempArray.join(""), tempArray.length]
}
console.log("Hassan  ".trimLength()[0])

