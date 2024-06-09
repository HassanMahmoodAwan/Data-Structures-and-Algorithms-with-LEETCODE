class CustomArray{
    constructor() {
        this.arr = {}
        this.Length = 0
    }

    //  === Methods ===
    push(val){
        this.arr[this.Length]  = val
        this.Length++
    }
    #push(index, val){
        this.arr[index] = val
    }

    pop(){
        if (this.Length === 0)
            return undefined
        const lastElement = this.arr[this.Length-1]
        delete this.arr[this.Length-1]
        this.Length--
        return lastElement

    }
     Get(index){
        if (! (index in this.arr) ){
            return undefined
        }
        return this.arr[index]
    }
    get length(){
        return this.Length
    }
}


// ======= Excecution ========
;(
    function main(){
        const arr = new CustomArray()
        arr.push(10)
        arr.push(20)
        arr.push(30)
        arr.pop()
        console.log(arr.Get(1))
        console.log(arr.length)
    }
)()