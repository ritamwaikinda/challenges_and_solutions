/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let highestRun = 0;
    let counter = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            counter++
        } else {
            if (counter > highestRun) {
                highestRun = counter
            }
            counter = 0
        }
    }
    
    return Math.max(counter, highestRun)
};