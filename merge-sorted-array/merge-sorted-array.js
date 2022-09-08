/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let firstTracker = 0;
    let first = 0;
    let second = 0;
    for(let i=0; i<nums1.length; i++){
        if(firstTracker === m){
            nums1[first] = nums2[second]
            first ++
            second ++
        } else if(second === n){
            first ++
        } else { 
            if(nums1[first] <= nums2[second]){
            firstTracker ++
            first ++
        } else {     
            let mm = nums1.length - 1
            while(mm  > (firstTracker + second)){
                nums1[mm] = nums1[mm-1]
                mm--
            }
            nums1[first] = nums2[second]
            first ++
            second ++
        }
        }
    }
    return nums1
};