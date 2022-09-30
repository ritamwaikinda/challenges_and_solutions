/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let ticker = 0
    if(arr.length < 3){
        return false
    }
    if(arr[0] > arr[1]){
       return false
    }
    if(arr[arr.length-2] < arr[arr.length-1]){
        return false
    }
    
    while (arr[ticker] < arr[ticker + 1]){
        ticker++
    }
    while (arr[ticker] > arr[ticker + 1]){
        ticker++
    }
    if (ticker === (arr.length - 1)){
        return true
    }
    return false
};