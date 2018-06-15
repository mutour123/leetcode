/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 */

 let s = -1230
 let s1 = Math.pow(2, 33)

 /* @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let maxVal = Math.pow(2, 31) - 1
    let minVal = -Math.pow(2, 31)
    if(x > 0){
        let temp = +((x + '').split('').reverse().join(''))
        return temp > maxVal ? 0 : temp
    }else if(x < 0){
        let temp = -((x + '').substring(1).split('').reverse().join(''))
        return temp < minVal ? 0 : temp
    }else{
        return 0
    }
};


let result = reverse(s1)


console.log(result)
