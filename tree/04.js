/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return null
    let arr = []
    let temp = [[root]]
    for(let i = 0; i < temp.length; i++){
        let tempArr = []
        let tempArrVal = []
        for(let j = 0; j < temp[i].length; j++) {
            tempArrVal.push(temp[i][j].val)
            if(temp[i][j].left) tempArr.push(temp[i][j].left)
            if(temp[i][j].right) tempArr.push(temp[i][j].right)
        }
        if(tempArr.length) temp.push(tempArr)
        if(tempArrVal.length) arr.push(tempArrVal)
    }
    return arr
    

};

//LeetCode上的优质答案
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = new Array();
    if (!root) {
      return ans;
    }
    helper(root, ans, 0);
    function helper(node, ans, level) {
      if(node==null)
           return;
       
       let list ;
       if(ans.length==0 || ans.length-1<level){
           list = new Array();
           list.push(node.val);
           ans.push(list);
       }else{
           list = ans[level];
           list.push(node.val);
       }        
       helper(node.left,ans,level+1);
       helper(node.right,ans,level+1);
    }
    return ans;
};