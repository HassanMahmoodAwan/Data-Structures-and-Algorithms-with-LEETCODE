class MyArray{
    constructor(){
        this.array = new Array()
    }
    push(element){
        this.array.push(element)
    }
    arrIndexOf(str){
        return this.array.indexOf(str)
    }
    arrSlice(start, end){
        return this.array.slice(start, end)
    }
    arrMerge(arr){
        return this.array.concat(arr)
    }
    insertAtIndex(index, value){
        if (index > this.array.length-1) {
            throw new Error('Index Not Exsist')
            return
        }
        this.array[index] = value
    }
    removeAtIndex(index){
        if (index > this.array.length-1) {
            throw new Error('Index Not Exist')
        }
        this.array.splice(index, 1)
    }
}


;(function main(){
    const obj = new MyArray()
    obj.push(1)
    obj.push(2)
    obj.push(3)
    obj.push(4)
    console.log(obj.arrSlice(0,2))
    obj.insertAtIndex(2, 10)
    obj.removeAtIndex(2)
    console.log(obj.array)
})()