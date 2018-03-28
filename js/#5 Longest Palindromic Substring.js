// source https://leetcode.com/problems/longest-palindromic-substring

/**
 * @param {string} s
 * @return {string}
 */
// 1. 取中间项，向两侧遍历，aba和abba是两种情况，分开遍历
let longestPalindrome = function(str) {
  {
    let resS = {}
    let resD = {}
    let length = str.length
    let bigS = 0
    let bigD = 0
    let maxS = 0
    let maxD = 0
    for (let i = 0; i< length; i++) {
      let numS = 0
      let numD = 0
      for (let j = 0; i - j >= 0 && i + j < length; j++) {
        if (str[i - j] === str[i + j]) {
          numS++
        } else {
          break
        }
      }
      for (let j = 0; i - j >= 0 && i + j < length; j++) {
        if (str[i - j] === str[i + j + 1]) {
          numD++
        } else {
          break
        }
      }
      resS[i] = numS
      resD[i] = numD
      if (numS > maxS) {
        bigS = i
        maxS = numS
      }
      if (numD > maxD) {
        bigD = i
        maxD = numD
      }
    }
    let s = str.slice(bigS - maxS + 1, bigS + maxS)
    let d = str.slice(bigD - maxD + 1, bigD + maxD + 1)
    if (maxS * 2 - 1 > maxD * 2) {
      return str.slice(bigS - maxS + 1, bigS + maxS)
    } else {
      return str.slice(bigD - maxD + 1, bigD + maxD + 1)
    }
  }
};