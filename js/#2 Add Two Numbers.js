// source https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1Arr = [];
  let l2Arr = [];
  while(l1) {
    l1Arr.push(l1.val)
    l1 = l1.next
  }
  while(l2) {
    l2Arr.push(l2.val)
    l2 = l2.next
  }
  console.log(l1Arr, l2Arr)
  let resultArr = []
  let carry = 0
  for(let i = 0; i < l1Arr.length || i < l2Arr.length; i++) {
    liValue = l1Arr[i] || 0
    l2Value = l2Arr[i] || 0
    value = liValue + l2Value + carry;
    carry = 0
    if(value >= 10) {
      carry = 1
    }
    value = value % 10
    resultArr.push(value)
  }

  if(carry) {
    resultArr.push(1);
  }
  console.log(resultArr)
  let begin = new ListNode(null)
  let temp = begin
  let next
  let len = resultArr.length
  for(let j = 0; j <= len - 1; j++) {
    next = new ListNode(null)
    temp.val = resultArr[j]
    if(j === len - 1) {
      temp.next = null
      break
    }
    temp.next = next
    temp = next
  }
  return begin
};