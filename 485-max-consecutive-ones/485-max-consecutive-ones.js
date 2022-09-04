/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let counter = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            counter += 1
        } else {
            if (counter > max){
                max = counter
            }
            counter = 0
        }
    }
    return Math.max(max,counter)
};