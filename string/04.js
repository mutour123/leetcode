/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
 * 示例 1:
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 示例 2:
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanagram", t = "nagaramaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
let s1 = "crat", t1 = "car"
let s2 = "cfdsrddddfgffat", t2 = "cfds"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {//使用正则表达式匹配得来
    let temp = t
    if(s.length !== t.length){
        return false
    }
    for(var i = 0; i < s.length; i++){
         temp = temp.replace(new RegExp(s[i]), '')
    }
    return temp === ''
};

var isAnagram1= function(s, t) {//leetcode上的优质答案
    let len = s.length
    const map = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0, 
    }
    if(len !== t.length) return false
    for(let i = 0; i < len; i++){
        map[s[i]]++
        map[t[i]]--
    }
    for (let k in map){
        if(map[k] !==0){
            return false
        }
    }
    return true
}


console.time('time:')
let result = isAnagram(s, t)
console.timeEnd('time:')


console.time('time1:')
result = isAnagram1(s, t)
console.timeEnd('time1:')
console.log(result)


/** 
 * 正则表达式是转为自动机再进行匹配的， 
 * 如果不看compile时间， 匹配速度大致可以看做是O(N)， 
 * 不过如果表达式比较复杂， 生成的NFA分支太多， 
 * 也是会慢的。
 * 如果每次都要compile一次， 就慢多了， 自动机生成过程还是挺费时间的。（来自知乎）
*/