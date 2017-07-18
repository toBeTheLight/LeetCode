// source https://leetcode.com/problems/same-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 1.
let isSameTree1 = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q)
};

// 2.
let isSameTree2 = function(p, q) {
    if (p && q) {
      return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
    return !p && !q
};