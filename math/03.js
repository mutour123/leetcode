/**
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 27
 * 输出: true
 * 示例 2:
 * 
 * 输入: 0
 * 输出: false
 * 示例 3:
 * 
 * 输入: 9
 * 输出: true
 * 示例 4:
 * 
 * 输入: 45
 * 输出: false
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let num = 1
    while(num < n ){
        num *= 3
    }
    if(num === n)return true
    else return false
};

// 
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {//leetcode上的优质答案： 判断是否是3的幂数。 只需要找一个比较大的数， 模上它， 如果为0就是
    return n > 0 && 1162261467 % n == 0;
};

let result
result = isPowerOfThree(12)
console.log(result)
