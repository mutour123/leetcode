/**
 * 给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 示例 1:
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 示例 2:
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 */

let digits =  [4,3,2,1]
let digits1 = [0 ,4,3,2, 1]
let digits2 = [9]
let digits3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

 /**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {//当数字超过范围时，会出错
    let num = +digits.join("") + 1
    console.log(num)
    let plusOneArr = (num+"").split("")

    let arr =  plusOneArr.map(val => {
        return +val
    })
    console.log(arr)
   
};

var plusOne = function(digits) {
    for(let i = digits.length-1; i >= 0; i--){
        if(digits[i] + 1 >= 10){
            //执行向前加一
            digits1[i] = (digits[i] + 1) % 10
            if(i === 0){
                digits.splice(0, 0, 1)
            }
        }else{
            digits1[i] += 1
            break
        }
    }
    return digits
}

plusOne(digits3)