// source https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
// 1. 好长
var isValid = function(s) {
  if(s.length % 2 === 1) {
    return false
  }
  let left = ['(', '[', '{']
  let hashObj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let temp = []
  for(let i = 0, len = s.length; i < len; i++) {
    let value = s[i]
    if(left.indexOf(value) >= 0) {
      temp.push(value)
    } else {
      if(temp[temp.length - 1] !== hashObj[value]) {
        return false
      } else {
        temp.pop()
      }
    }
  }
  if(temp.length !== 0) {
    return false
  }
  return true
};