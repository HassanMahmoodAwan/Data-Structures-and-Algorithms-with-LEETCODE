class Stack{
    constructor(){
        this.Stack = new Array()
    }
    stackPush(element){
        this.Stack.push(element)
    }
    get stackPop(){
        return this.Stack.pop()
    }
    get Peak(){
        return this.Stack[this.Stack.length-1]
    }
    get isEmpty(){
        return this.Stack.length?false:true
    }
    get Size(){
        return this.Stack.length
    }
}

;(function main(){
    const stk = new Stack()
    stk.stackPush(10)
    stk.stackPush(60)
    stk.stackPush(112)
    stk.stackPush(9)

    stk.stackPop

    console.log(stk.Peak)
    console.log(stk.Size)
    console.log(stk.isEmpty)
    console.log(stk.Stack)
})()