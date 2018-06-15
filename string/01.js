/**
 * 请编写一个函数，其功能是将输入的字符串反转过来。
 * 示例：
 * 输入：s = "hello"
 * 返回："olleh"
 */
let s = "hello"

 /**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    s = s.split("").reverse().join("")
    return s
};
reverseString(s)