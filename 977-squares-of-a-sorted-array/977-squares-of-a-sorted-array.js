/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     // for(let i=0; i<nums.length; i++){
//     //     nums[i] = nums[i] ** 2
//     // }
//     // return nums.sort((a,b) => a-b)
//     let squarednums = []
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right){
//         if (Math.abs(nums[left]) > Math.abs(nums[right])){
//             squarednums.unshift(nums[left] ** 2)
//             left ++
//         } else {
//             squarednums.unshift(nums[right] ** 2)
//             right --
//         }
//     }
//     return squarednums
// };

var sortedSquares = function(nums) {
    let arr = []
    for(let i=0; i<nums.length; i++){
        arr.push(nums[i] ** 2)
    }
    return arr.sort((a,b) => a-b)
};