// source https://leetcode.com/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 1 取index按index删除
let removeElement1 = function(nums, val) {
    while (nums.indexOf(val) >= 0) {
        let index = nums.indexOf(val)
        nums.splice(index, 1)
    }
    return nums.length
};
// 1.1  稍微简化一下
let removeElement2 = function(nums, val) {
    let index
    while (index = nums.indexOf(val), index >= 0) {
        nums.splice(index, 1)
    }
    return nums.length
};