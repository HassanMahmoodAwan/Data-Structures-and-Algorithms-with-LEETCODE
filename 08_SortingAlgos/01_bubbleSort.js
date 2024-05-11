// Bubble Sort  TC => O(n2), SC => O(1)


function bubbleSort(list){
    let first, second;
    let flag = false
    for(let i=0; i<=list.length; i++){
        flag =  false
        for (let j = 0; j < list.length-1; j++){

            first = j
            second = j+1

            if (list[first] > list[second]){
                list[first] += list[second]
                list[second] = list[first] - list[second]
                list[first] = list[first] - list[second]
                flag = true
            }
        }
        if (!flag){
            console.log("Broke")
            break
        }

    }

    console.log(list)
}

;(function main(){
    let arr = [3,1,4,1,6]
    bubbleSort(arr)
})();
