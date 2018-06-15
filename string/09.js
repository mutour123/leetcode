/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 说明:
 * 所有输入只包含小写字母 a-z 。
 */
let strs = ["flower","flow","flight"]
let strs1 = ["dog","racecar","car"]
let strs2 = ["a","b"]
let strs3 = ["c", "c"]
let strs4 = ["c","acc","ccc"]
 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length)return ""
    if(strs.length === 1) return strs[0]
    let str = strs[0]
    if(!str) return ""
    let len = str.length
    let index = 0;//截取0位
    for(let i = 0; i < len; i++){
        for(let j = 1; j < strs.length; j ++){
            if(strs[j].indexOf(str.substring(0, i+1)) !== 0 ){
                return str.substring(0, index) 
            }
        }
        index++
    }
    return str.substring(0, index) 
};

let result = longestCommonPrefix(strs2)
console.log(result)