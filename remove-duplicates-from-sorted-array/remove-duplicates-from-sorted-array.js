/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            for(let j=i; j<(nums.length-1); j++){
                nums[j+1] = nums[j+2]
            }
            i--
            nums.length--
        }
    }
};