// source https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. (1)按长度排序
//	  (2)以最短字符为基准长度substr所有字符串
//    (3)新数组join('')后按最短基准为分割split
//    (4)若基准为result,则新数组内全为空串
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    }
	let temp = []
	strs.sort((a, b) => {
		return a.length - b.length
	})
	for (let len = strs[0].length; len > 0; len--) {
		let strsArr = strs.map((value) => {return value.substr(0, len)})
		let str = strsArr.join('').split(strsArr[0]).join('')
		if (str === '') {
			return strsArr[0]
		}
	}
	return ''
};