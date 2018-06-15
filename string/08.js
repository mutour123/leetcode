/**
 * 报数序列是指一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 给定一个正整数 n ，输出报数序列的第 n 项。
 * 注意：整数顺序将表示为一个字符串。
 * 示例 1:
 *  输入: 1
 * 输出: "1"
 * 示例 2:
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 * 1
 * 11
 * 21
 * 1211
 * 111221
 * 2111121211
 * 12212112111221
 * 111212111221122111121211
 *
 * 
 */




 /**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {//开发版
    if( n == 1)return "1"
    let str = "1"
    // let reg = /11/g, reg1 = /1/g, reg2 = /2/g
    let reg = /11|1|2/g
    for(let i = 1; i < n; i++){
        console.log(i)
        console.log(`进入时的str-> ${str}`)    
        str = str.replace(reg, function(match){
            console.log(`匹配结果-》 ${match}`)
            // return "a"
            switch(match) {
                case '11':
                    return '21'
                case '1': 
                    return '11'
                case '2':
                    return '12'     
            }
        })
        console.log(`出来时的str-> ${str}`)
        console.log('===============================')
    }
    return str
};


var countAndSay = function(n) {//开发版
    if( n == 1)return "1"
    let str = "1"
    let reg = /11|1|2/g
    for(let i = 1; i < n; i++){
        str = str.replace(reg, function(match){
            switch(match) {
                case '11':
                    return '21'
                case '1': 
                    return '11'
                case '2':
                    return '12'     
            }
        })
    }
    return str
};
let result = countAndSay(5)


/** 
 * 以上结果错误， 题意没有理解清楚。
 * 
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {//使用正则表达式，成功完成
    if( n == 1)return "1"
    let str = "1"
    let reg = /0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g
    for(let i = 1; i < n; i++){
        str = str.replace(reg, function(match){
            let len = match.length
            let letter = match[0]
            return '' + len + letter
        })
    }
    return str
};

console.time('time:')
result = countAndSay(40)
console.timeEnd('time:')
console.log(result)
