// source https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. 由大到小遍历，删除重复项。
let removeDuplicates1 = function(nums) {
    for (let len = nums.length, i = len - 1; i >= 1; i--) {
        if (nums[i] === nums[i - 1]) {
           nums.splice(i, 1) 
        }
    }
    return nums.length
};
// 2. 不用频繁splice数组
let removeDuplicates2 = function(nums) {
    let index = 0
    for (let len = nums.length, i = 1; i < len; i++) {
        if (nums[i] !== nums[i - 1]) {
           nums[++index] = nums[i]
        }
    }
    return index + 1
};