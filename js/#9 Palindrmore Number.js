// source https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    if (x < 0) {
      return false   
    }
    return x === +('' + x).split('').reverse().join('')
}