/**
 * 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
 * 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
 * 
 * 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
 * 
 * 示例:
 * 
 * 给定 n = 5
 * 
 * 调用 isBadVersion(3) -> false
 * 调用 isBadVersion(5) -> true
 * 调用 isBadVersion(4) -> true
 * 
 * 所以，4 是第一个错误的版本。 
 */

 /**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(!isBadVersion(n)) return 0//没有错误的版本
        if(isBadVersion(1)) return 1
        let l = 1, r = n//如果存在错误的版本， 调用二分递归的方法判断
        return isFirst(l, r)

        function isFirst(l, r){
           if(l > r){//出现这种情况只能自完美分隔， 可能向左分割， 也可能向右分割
               if(isBadVersion(l)) 
                   return l
                else
                    return r
           }
           if(l == r && isBadVersion(l)){//当只有一个版本的时候就会出现这样的情况{
                return l
            }
           let mid = Math.floor(l + (r - l)/2)
           
           if(!isBadVersion(mid) && !isBadVersion(mid + 1)  ){//中间值为true
               return isFirst(mid + 2, r)//越界， 触发终止条件           
           }else if(!isBadVersion(mid) && isBadVersion(mid + 1)){//true, false
               return mid + 1
           }else if(isBadVersion(mid) && !isBadVersion(mid - 1)){
               return mid 
           }else if(isBadVersion(mid) && isBadVersion(mid-1)){
               // return `zheli${isBadVersion(mid-1)}`
               if(r == 1150769281 || l == 1150769282 || mid == 1150769282 || mid == 1150769281 ){
                   return `r是${r}`
               }
                return isFirst(l, mid - 2)//越界触发终止条件
           }
       }
    };
};

/**
 * 当使用二分法时， 如果涉及当前元素的左元素 或右元素时， 需要考虑完美分割的情况
 */