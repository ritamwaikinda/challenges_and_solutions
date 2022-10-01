/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let biggest = arr[arr.length-1];
    
    for(let i = arr.length-1; i>=0; i--){      
        if(arr[i] > biggest){
            let newBiggest = arr[i]
            arr[i] = biggest
            biggest = newBiggest
        } else {
            arr[i] = biggest
        }
    }
    arr[arr.length-1] = -1
    return arr
};