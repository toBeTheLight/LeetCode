// source https://leetcode.com/problems/merge-two-sorted-lists

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
// 1.
var mergeTwoLists = function(l1, l2) {
    let arr = []
    while (l1) {
        arr.push(new ListNode(l1.val))
        l1 = l1.next
    }
    while (l2) {
        arr.push(new ListNode(l2.val))
        l2 = l2.next
    }
    if (!arr.length) return []
    arr.sort((a, b) => a.val - b.val)
    for(let i = 0, len = arr.length; i < len - 1; i++){
        arr[i]['next'] = arr[i + 1]
    }
    return arr[0]
};