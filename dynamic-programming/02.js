/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 *      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 * 示例 2:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

/**
 * 该题和数组联系中的第二题有点相同， 不同在于， 该题只能完成一次交易。 即 获得最大差值的两个元素的递增子序列， 典型的动态规划问题 
 * 
 * 解法一： 每个元素为买入， 遍历得到最大差价。 最大差价做max运算得到最大值
 * 
 * 解法二： 通过动态规划的思想可以到， 整个程序运行的过程就是， 每个元素减去前面所有元素的最小值
 */

 let prices = [7,1,5,3,6,4]
 let prices1 = [7,1,5,3,6,4]
 
 //解法一
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let arr = [0]//默认装一个0, 如果都没有， 就返回该值
   for(let i = 0; i < prices.length - 1; i++){
       let temp = Math.max.apply(Math, prices.slice(i+1))
       if( prices[i] < temp ){
            arr.push(temp - prices[i])
       }
   }
   return Math.max.apply(Math, arr)
};
// let result = maxProfit(prices)


/**
 * 解法二： 使用动态规划
 * 经过分析， 在转移的过程中， 只需要更新最小的元素即可
 * 
 */
var maxProfit = function(prices) {
   let min = -1
   let arr = [0]
   for(let i = 0; i < prices.length; i++){
        if(min < 0){
            min = prices[i]
        }else if(prices[i] > min){
            arr.push(prices[i] - min)
        }else if(prices[i] < min){
            min = prices[i]
        }   
   }
   return Math.max.apply(Math, arr)

 };

let result = maxProfit(prices1)

console.log(result)