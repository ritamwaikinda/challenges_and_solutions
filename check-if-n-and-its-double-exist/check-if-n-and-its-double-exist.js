/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let check = {}
    for(let i=0; i<arr.length; i++){
        if((arr[i] * 2) in check || (arr[i] / 2) in check){
            return true
        } else {
            check[arr[i]] = arr[i]
        }
    }
    return false
};