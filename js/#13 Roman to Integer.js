// source https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */

// 1. (1)roman转数字数组
//    (2)前后比较确定加减规则
//    (3)计算
let romanToInt1 = function(s) {
    let hashObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000     
    }
    s = s.split('').map(function (value) {
        return hashObj[value]
    })
    let temp = []
    for (let i = 0, len = s.length;i < len - 1; i++) {
        if(s[i] >= s[i+1]) {
            temp.push('+')
        } else {
            temp.push('-')
        }
    }
    for (let key in temp) {
        if (temp[key] === '-') {
            s[key] = -s[key]
        }
    }
    return s.reduce(function(prev, next){
        return prev + next
    })
}
// 2. 简化1
let romanToInt2 = function(s) {
    let hashObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000     
    }
    s = s.split('').map(function (value) {
        return hashObj[value]
    })
    let result = 0
    s.reduce((prev, next) => {
    	prev < next ? result -= prev : result += prev
    	return next
    })
    return result + s[s.length - 1]
}