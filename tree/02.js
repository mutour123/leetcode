/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 一个二叉搜索树具有如下特征：
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 示例 1:
 * 输入:
 *     2
 *    / \
 *   1   3
 * 输出: true
 * 示例 2:
 * 输入:
 *     5
 *    / \
 *   1   4
 *      / \
 *     3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 *      根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
var isValidBST = function(root) {//使用递归的方式
    function _isValidBST(node){
        if(!node)return//递归到底的终止条件
        
        if(node.left && node.left.val < node.val ){
          if( _isValidBST(node.left) === false){
              return false
          }
        }else if(node.left.val > node.val){
            return false
        }

        if(node.right && node.right.val > node.val){
           if( _isValidBST(node.right)){
               return false
           }
        }else if(node.right.val < node.val){
            return false
        }
    }
    if(_isValidBST(root) === false) return false
    return true
   
    
};




var isValidBST = function(root) {//以上方法没有考虑到父节点的问题, 
    function _isValidBST(node, parent, isLeft){
        if(!node)return//递归到底的终止条件
        if(!parent){//如果没有父节点
            if(node.left && node.left.val < node.val ){
                if( _isValidBST(node.left, node, true) === false){
                    return false
                }
              }else if(node.left && node.left.val >= node.val){
                  return false
              }
      
            if(node.right && node.right.val > node.val){
                if( _isValidBST(node.right, node, false) === false){
                    return false
                }
                }else if(node.right && node.right.val <= node.val){
                  return false
                }
            }else{//如果有父节点
                if(isLeft){//且是左子节点
                    if(node.left && node.left.val < node.val){
                        if( _isValidBST(node.left, node, true) === false){
                            return false
                        }
                    }else if(node.left && node.left.val >= node.val){
                        return false
                    }

                    if(node.right && (node.right.val <= node.val || node.right.val >= parent.val)){
                        if( _isValidBST(node.right, node, false) === false){
                            return false
                        }
                    }else if(node.right && node.right.val <= node.val){
                        return false
                    }
                }else{//右子节点
                    if(node.left && node.left.val < node.val && node.left.val > parent.val){
                        if( _isValidBST(node.left, node, true) === false){
                            return false
                        }
                    }else if(node.left && (node.left.val >= node.val || node.left <= parent.val)){
                        return false
                    }

                    if(node.right && node.right.val <= node.val){
                        return false
                    }else if(node.right && node.right.val > node.val){
                        if(_isValidBST(node.right, node, false) === false){
                            return false
                        }
                    }
                }

          }
        }




       
    if(_isValidBST(root, null) === false) return false
    return true
   
    
};
/**
 * 使用深搜索失败， 要考虑太多的父节点与子节点的关系。 如果每个都判断， 太混乱了。
 * 
 * 以下使用搜索树的中序遍历。 此处有一个特性， 中序遍历后的结果将是一个递增的序列。
 * 
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
 * @return {boolean}
 */
var isValidBST = function(root) {//使用中序遍历
    let arr = []
    function _deepSearch(node){
        if(!node) return 
        _deepSearch(node.left)
        arr.push(node.val)
        _deepSearch(node.right)
    }
    _deepSearch(root)
    for(let i = 1; i < arr.length; i++){
        if( arr[i-1] >= arr[i]) return false
    }
    return true
};

