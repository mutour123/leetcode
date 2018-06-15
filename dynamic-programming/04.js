/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 *      偷窃到的最高金额 = 1 + 3 = 4 。
 * 示例 2:
 * 
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 *      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */

let nums = [1,2,3,1]
let nums1 = [2,7,9,3,1]
let nums2 = [1,3,1,3,100]
let nums3 = [1,1,1,2]
let nums4 = [4,1,2]
 /**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {//通过动态规划分析
    let len = nums.length
    if(len === 0) return 0
    if(len === 1) return nums[0]
    if(len === 2) return Math.max(nums[0], nums[1])
    let  currentMax = Math.max(nums[0], nums[1]), //当前最大值
    first = nums[1], //将要用于判断加入一个元素后， 如何转移
    two = nums[0], //将要用于判断加入一个元素后， 如何转移  two first n
    temp//用于交换
    for ( let i = 2; i < nums.length; i++) {
        let temp1 = nums[i] + first - nums[i-1]//
        let temp2 = nums[i] + two //
        two = first
        if(temp1 > currentMax && temp1 > temp2 ){
            currentMax = temp1
            first =  temp1
        }else if(temp2 > currentMax && temp2 >= temp1){
            first = temp2
            currentMax = temp2
        }else if(currentMax >= temp1 && currentMax >= temp2){
            first = temp2
        }
    }
    return currentMax
};

let result

result = rob(nums4)
console.log(result)

/**
 * 大家劫舍， 其实就是求一个数组中两两元素不相邻的子数组的元素和的最大值
 * 
 * 使用动态规划的思想， 没加入一个元素， 如何改变到下一个状态。 
 * 
 * 遍历一次， 每次内部计算几次， 何以忽略。 所以时间复杂度为O(n)
 * 
 */
