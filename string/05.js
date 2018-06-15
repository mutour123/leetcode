/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 */

 let s = "A mAn, a plan, a canal: Panama"
 let s1 = "race a car"

 let s2 = "Never a foot too far, even."
 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLocaleLowerCase()
    let reg = /\W/g
    s = s.replace(reg, '')
    console.log(s)
    let len = s.length
    console.log(len-1)
    for( let i = 0; i < len / 2; i++){//测试版
       
        if(s.indexOf(s[i], i) + s.lastIndexOf(s[i], len - i -1) !== len-1) {
            console.log(s.indexOf(s[i], i))
            console.log( s.lastIndexOf(s[i], len - i))
            console.log(s.indexOf(s[i], i) + s.lastIndexOf(s[i], len - i-1))
            return false
        }   
        console.log('=====================')
    }
    return true
   
};          


var isPalindrome = function(s) {
    s = s.toLocaleLowerCase().replace(/\W/g, '')
    let len = s.length
    for( let i = 0; i < len / 2; i++){
        if(i + s.lastIndexOf(s[i], len - i -1) !== len-1) {
            return false
        }   
    }
    return true
   
};          
s = '121'

let result = isPalindrome('121')
console.log(result)