// source https://leetcode.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
// 1.
var lengthOfLastWord = function(s) {
    let arr = s.split(' ').filter(value => value !== ' '&& value !== '')
    if (arr.length == 0) {
        return 0
    }
    return arr[arr.length - 1].length
};