/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for(let i=0; i<arr.length; i++){
        
        if(arr[i]===0){
            let n = arr.length - 1
            while(n > i){
                arr[n] = arr[n-1]
                n--
            }
            i += 1
        } else {
            continue
        }
    }
};