class Users{
//  === Class property
    static UsersType = "Window_Shopper"

//  === Class/Static Methods             // Instance Variable Not Accessible.
    static greetingMessage(name, age){
        return `${name} is with age: ${age}`;
    }
    static getClassVariable(){
        return this.UsersType
    }
}

console.log(Users.UsersType)                                    // class property
console.log(Users.greetingMessage("Hassan", 21))     // class Method

const obj = new Users()
