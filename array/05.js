/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */

 //使用set来实现

 let nums = [4,1,2,1,2]
 var singleNumber = function(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(set.size && set.has(nums[i])){
            set.delete(nums[i])
        }else{
            set.add(nums[i])
        }
    }
    return [...set][0]
};
singleNumber(nums)

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var a = 0
    for (let val of nums) a ^= val
    return a
};