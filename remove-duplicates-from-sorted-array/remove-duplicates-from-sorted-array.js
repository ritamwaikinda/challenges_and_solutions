/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 0;
    for(let i=0; i<nums.length; i++){
        if (i === 0 || nums[i] !== nums[i-1]){
            nums[unique] = nums[i]
            unique++
        } 
    }
    nums.length = nums.length - (nums.length - unique)
    return nums.length
};