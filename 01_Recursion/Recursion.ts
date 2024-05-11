

class Recursion{
    // protected factorial_no:number = 5
    // protected fibonacci_no:number = 6

    constructor() {

    }
    // ==== 1-Branch Recursion ====
    factorial(Number: number = 5): number{
        if (Number == 1){ return 1            /* Base-Condition */ }

        else{
            return this.factorial(Number -1)
        }
    }

    // ==== 2-Branch Recursion ====
    fibonacci(Number:number = 6): number{
        if(Number<=1){
            return Number               // Base-Condition
        }else{
            return this.fibonacci(Number-1) + this.fibonacci(Number-2)
        }
    }

}


;(
    function main(){
        const obj:Recursion = new Recursion()

        const factorial:number = obj.factorial(5)
        console.log(factorial)

        const fibonacci: number = obj.fibonacci(6)
        console.log(fibonacci)
    }
)()
