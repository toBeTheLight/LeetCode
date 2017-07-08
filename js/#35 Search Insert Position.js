// source https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 1.塞进数组取索引
let searchInsert1 = function(nums, target) {
    nums.push(target)
    return nums.sort((a, b) => a - b).indexOf(target)
};

// 2.单次遍历
let searchInsert2 = function(nums, target) {
  let len = nums.length
  for (let i = 0; i < len; i++){
    if (nums[i] >= target) {
      return i
    }
  }
  return len
}
