// source https://leetcode.com/problems/add-binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 1.
let addBinary = function(a, b) {
  if(!a) {
    return b
  }
  if(!b) {
    return a
  }
  a = String(a)
  b = String(b)
  let temp = ''
  for(let aI = a.length - 1, bI = b.length - 1; aI >= 0 || bI >= 0; aI--, bI--) {
    temp = ((+a[aI] || 0) + (+b[bI] || 0)) + temp
  }
  temp = temp.split('')
  for(let nth = temp.length - 1; nth >= 0; nth--) {
    if(temp[nth] >= 2) {
      temp[nth] -= 2
      if(nth == 0) {
        temp.unshift(1)
      } else {
        temp[nth - 1] = +temp[nth - 1] + 1
      }
    }
  }
  return temp.join('')
};