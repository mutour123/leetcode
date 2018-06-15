/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * 说明:
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
var isSymmetric = function(root) {//使用中序遍历， 判断是否为回文字符串.!!!!!!该方法失败， 失败用例如：[1,2,3,3,null,2,null]
    let arr = [[root]]
    function minSearch(node){
        if(!node) return
        minSearch(node.left)
        arr.push(node.val)
        minSearch(node.right)
    }
    var isPalindrome = function(s) {
        let len = s.length
        for( let i = 0; i < len / 2; i++)
            if(i + s.lastIndexOf(s[i], len - i -1) !== len-1) return false 
        return true
    };

    return isPalindrome(arr)
};

/**
 * 还是只能使用层序遍历。 对每一层做判断
 */

 
var isSymmetric = function(root) {//结果同上， 依旧是错误。 结果上面的方法， 和本方法一起检验 
    if(!root)return true
    var isPalindrome = function(s) {
        let len = s.length
        for( let i = 0; i < len / 2; i++)
            if(i + s.lastIndexOf(s[i], len - i -1) !== len-1) return false 
        return true
    };

    let arr = [[root]]
    for(let i = 0; i < arr.length; i++){
        let temp = []
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j].left){
                temp.push(arr[i][j].left)
            }
            if(arr[i][j].right){
                temp.push(arr[i][j].right)
            }
        }

       if(temp.length) arr.push(temp)
    }
 
    for(let i = 0; i < arr.length; i++){
        let tempArr = []
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j].val){
                tempArr.push(arr[i][j].val)
            }
        }
        if(!isPalindrome(tempArr)){
            return false
        }
    }
    return true
};

var isSymmetric = function(root) {//该方法，结合以上两种方法. 结果成功
    if(!root)return true
    let arr = [[root]]
    let stringArr = []
    function minSearch(node, arr){
        if(!node) return
        minSearch(node.left)
        arr.push(node.val)
        minSearch(node.right)
    }
    var isPalindrome = function(s) {
        let len = s.length
        for( let i = 0; i < len / 2; i++)
            if(i + s.lastIndexOf(s[i], len - i -1) !== len-1) return false 
        return true
    };
    minSearch(root, stringArr)

    if(isPalindrome(stringArr)){
        for(let i = 0; i < arr.length; i++){
            let temp = []
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j].left) temp.push(arr[i][j].left)
                if(arr[i][j].right) temp.push(arr[i][j].right)
            }
            if(temp.length) arr.push(temp)
            let tempArr = []
            for(let i = 0; i < temp.length; i++){
                if(temp[i].val) tempArr.push(temp[i].val)
           }
           if(!isPalindrome(tempArr)) return false
        }
    }else{
        return false
    }
    return true
};

//leetcode上的优质答案
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
var isSymmetric = function (root) {
    return helper(root, root)
};

function helper(l, r) {
    if (l == null && r == null) return true;
    if (l == null || r == null) return false;
    return (l.val == r.val) && helper(l.left, r.right) && helper(l.right, r.left)

    /////////////////////////////////////////////////////////////

    if (l == null && r == null) return true
    if (l == null || l == null) return false
    if (l.val === r.val){
        if(!helper(l.left) )return false
        if(!helper(l.right, r.left)) return false
    }
}
/**
 * 对leetCode的答案的想法：
 * 对于两颗树， 如果判断它们是否对称？
 * 所以这里采用这样的做法， 将root, root当做两颗树传入
 * 
 * 
 * 
 */