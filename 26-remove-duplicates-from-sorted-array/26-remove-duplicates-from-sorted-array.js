/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertionIndex = 0;
    let duplicates = 0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[insertionIndex] = nums[i]
            insertionIndex ++
        } else {
            duplicates ++
        }
    }
    nums.length -= duplicates
};