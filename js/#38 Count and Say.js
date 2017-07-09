// source https://leetcode.com/problems/count-and-say

/**
 * @param {number} n
 * @return {string}
 */

// 1.声明一个将数字字符串转为次数加数字的函数，而后递归调用
let countAndSay = function(n) {
  function strToCount(str) {
    let len = str.length
    if(len === 1) {
      return '11'
    }
    let target = str[0]
    let num = 1
    let countStr = ''
    for(let i = 0; i < len - 1; i++) {
      if(str[i + 1] === target) {
        num++
      } else {
        countStr += num + target
        target = str[i + 1]
        num = 1
      }
    }
    countStr += num + target
    return countStr
  }
  let result = '1'
  if(n === 1) {
    return result
  } else {
    for(let i = 2; i <= n; i++) {
      result = strToCount(result)
    }
  }
  return result
};