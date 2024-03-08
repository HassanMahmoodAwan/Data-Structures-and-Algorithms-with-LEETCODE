class Stack{
    constructor(stack = []){
        this.itemStack = stack
    }

    push(element){
        this.itemStack.push(element)
    }
    pop(){
        if (this.itemStack.length === 0)
            return "Overflow"
        return this.itemStack.pop()
    }
    peek(){
        return this.itemStack[this.itemStack.length - 1]
    }

}