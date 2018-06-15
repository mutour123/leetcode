/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 示例:
 * 给定有序数组: [-10,-3,0,5,9],
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 * 
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
  * 解题思路：
  * 1. 使用构建平衡树的方式， 挨个传入
  * 2. 使用二分法
  */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) { //使用二分法的方式
    let len = nums.length
    if(!len) return null
    let root = new TreeNode(null)
    function twoFen(node, nums, l, r){
        if(l > r)return
        let middle = Math.ceil(l + (r - l)/2)
        node.val = nums[middle]
        if(l <= middle-1){
            node.left = new TreeNode(null)
            twoFen(node.left, nums, l, middle -1)
        }
        if(middle + 1 <= r ){
            node.right = new TreeNode(null)
            twoFen(node.right, nums, middle + 1, r)
        }
    }
    twoFen(root, nums, 0, len-1)
    return root
};



//这是顺便练习的一下二分搜索代码
function erfen(arr, l, r){//这里的区间范围是[l, r]前闭， 后闭arr = [1, 2, 3, 4, 5] [0, 4]
    if(l > r)return
    let min = Math.ceil(l + (r-l)/2)//得到中间值 0 + 4 = 4 / 2 = 2
    if(arr[min] == target) return true // arr[2] == 3
    erfen(arr, l, min-1) 
    erfen(arr, min+1, r)
}