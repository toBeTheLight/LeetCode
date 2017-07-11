// source https://leetcode.com/problems/maximum-subarray
// 就是求数组的最长子串的和
/**
 * @param {number[]} nums
 * @return {number}
 */

// error 1.一个超时的答案，遍历次数太多了。
// 考虑能不能直接单次遍历直接拿和做对比而不需要找到确定的子串
var maxSubArray = function(nums) {
  let len = nums.length
  if(len == 1) return nums[0]
  let sumArr = []

  function getArrSum(arr) {
    let result = 0
    arr.forEach((value) => result += value)
    return result
  }
  for(let i = len; i >= 1; i--) {
    for(let j = 0; j <= len - i; j++) {
      sumArr.push(getArrSum(nums.slice(j, j + i)))
    }
  }
  sumArr.sort((a, b) => b - a)
  return sumArr[0]
};