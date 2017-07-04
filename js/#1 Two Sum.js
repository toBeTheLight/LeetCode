// source https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. 两次循环
let twoSum1 = function (nums, target) {
    for (let i = 0,len = nums.length; i < len; i++) {
        for (let j = i + 1 ; j < nums.length ; j++ ){
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
// 2.数组存值 余数 = 索引
let twoSum2 = function (nums, target) {
	let arr = []
	for (let i = 0, len = nums.length; i < len; i++){
		let temp = target - nums[i]
		if (arr[temp] !== undefined) {
			return [i, arr[temp]]
		}
		arr[nums[i]] = i
	}
}
