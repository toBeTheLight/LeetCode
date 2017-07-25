// source Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */

// 对象存索引，重复位置重启start，start之前删除重新存
let lengthOfLongestSubstring = function(s) {
    let temp = {}, start = 0, length = 0, max = 0
    for (let i = 0; i < s.length; i++) {
        if (temp[s[i]] === undefined || temp[s[i]] < start) {
            temp[s[i]] = i
            length += 1
        } else {
            if (length > max) {
                max = length
            }
            start = temp[s[i]]
            length = i - temp[s[i]]
            temp[s[i]] = i
        }
    }
    if (length > max) {
        max = length
    }
    return max
};