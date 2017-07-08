// source https://leetcode.com/problems/implement-strstr

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 1.
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }
    let result = haystack.split(needle)
    if (result[0] === haystack) {
        return -1
    } else {
        return result[0].length
    }
};