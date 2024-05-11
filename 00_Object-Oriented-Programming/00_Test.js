console.log(String.prototype);

function Test() {
    this.age = 23
}
const obj = new Test()
console.log(obj)                // returns Obj

Test.topMessage = ()=>{
    console.log("Hello")
}
Test.topMessage()