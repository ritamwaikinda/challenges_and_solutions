/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numbers = 0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[numbers] = nums[i]
            numbers++
        }
    }
    
    for(let i=numbers; i<nums.length; i++){
        nums[i] = 0
    }
    
    return nums
};