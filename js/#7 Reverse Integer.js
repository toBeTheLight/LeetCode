// source https://leetcode.com/problems/two-sum

/**
 * @param {number} x
 * @return {number}
 */

// 1.转字符串 按位取反
let reverse1 = function (x) {
    let flag, y = Math.abs(x)
    flag = y === x? true : false
    y = '' + y
    y = reverseStr(y)
    y = flag? +y : -y
    if (y > Math.pow(2, 31) - 1 || y < -Math.pow(2, 31)){
        return 0
    } else {
        return y
    }
}
let reverseStr = function (str) {
    let temp = ''
    for(let len = str.length, i = len-1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}
// 2.转字符串转数组 reverse
let reverse = function (x) {
	x = ('' + x).split('')
	if (x[0] === '-') {
		x.shift()
		x = -x.reverse().join('')
	} else {
		x = +x.reverse().join('')
	}
	    if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)){
        return 0
    } else {
        return x
    }
}