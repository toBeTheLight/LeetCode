// source https://leetcode.com/problems/sqrtx

/**
 * @param {number} x
 * @return {number}
 */
// 1. (;¬_¬)
let mySqrt1 = function(x) {
    return Math.floor(Math.sqrt(x))
}
// 2.
let mySqrt2 = function(x) {
    if (typeof(x) !== 'number') {
        return 
    }
    if (x === 1) {
        return 1
    }
    if (x === 0) {
        return 0
    }
    let start = 0
    let end = x
    let mid
    while (start !== end) {
        mid = Math.floor((start + end)/2)
        if (mid === start || mid === end) {
            return mid
        }
        if (mid*mid > x) {
            end = mid
        } else if (mid*mid < x) {
            start = mid
        } else {
            start = end
        }
    }
    return mid
}