/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

let nums = [-2,1,-3,4,-1,2,1,-5,4]

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {//开发版
    // console.log(nums.length)
    let maxNumArr = [nums[0]]
    let back = 0
    for(let i = 1; i < nums.length; i++){
        let temp = nums.slice(back, i + 1)
        console.log(`i - back + 1: ${i - back + 1}`)
        console.log(`temp: ${temp}`)
        let total = 0
        temp.forEach(item => {
            total += item
        })
        console.log(`back: ${back}`)
        console.log(`i: ${i}`)
        console.log(`total: ${total}`)
        console.log(`maxNumArr[i]: ${maxNumArr[maxNumArr.length-1]}`)
        
        if( nums[i] >= total ){
            maxNumArr.push(nums[i])
            back = i
        }else if(total > maxNumArr[maxNumArr.length - 1]){
            maxNumArr.push(total)
            // console.log("back->"+back)
        }

        console.log('==========================')

    }
    let max = Math.max.apply(Math, maxNumArr)
    console.log(maxNumArr)
    console.log(max)
}; 




var maxSubArray = function(nums) {//完成版
    let maxNumArr = [nums[0]]
    let back = 0
    for(let i = 1; i < nums.length; i++){
        let temp = nums.slice(back, i + 1)
        let total = 0
        temp.forEach(item => {
            total += item
        })
        if( nums[i] >= total ){
            maxNumArr.push(nums[i])
            back = i
        }else if(total > maxNumArr[maxNumArr.length - 1]){
            maxNumArr.push(total)
        }
    }
    let max = Math.max.apply(Math, maxNumArr)
    return max
}; 

maxSubArray(nums)


