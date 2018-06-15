/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最大深度 3 。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {//使用层级遍历， 每一个层级的子节点都存放在一个新的数组中， 并把该数组push进入总的数组中。
    if(!root) return 0
    let count = [[root]]
    for(let i = 0; i < count.length; i++){
        if(!count[i].length) break
        let tempArr = []        
        for(let j = 0; j < count[i].length; j ++){
            if(count[i][j].left){
                tempArr.push(count[i][j].left)
            }
            if(count[i][j].right){
                tempArr.push(count[i][j].right)
            }
        }
        if(tempArr.length){
            count.push(tempArr)
        }
    }
    return count.length
};

