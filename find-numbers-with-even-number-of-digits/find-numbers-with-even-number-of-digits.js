/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenCounter = 0;
    
    for (let i=0; i<nums.length; i++){
        let splitValue = nums[i].toString().split('');
        if (splitValue.length % 2 === 0) {
            evenCounter++
        }
    }
    
    return evenCounter
};