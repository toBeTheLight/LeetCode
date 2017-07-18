// source https://leetcode.com/problems/remove-duplicates-from-sorted-list

// 链表去除连续的重复值，并返回链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head) {
    return null
  }
  let temp = head
  let start = temp
  let value = head.val
  while (temp && temp.next) {
    if (value !== temp.next.val) {
      start.next = temp.next
      start = temp.next
      value = temp.next.val
    }
    temp = temp.next
  }
  if (value === temp.val) {
    start.next = null
  }
  return head
};