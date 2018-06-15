/**
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：\
 * 
 *  可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * 
 * 示例 1:
 * 
 * 输入: "III"
 * 输出: 3
 * 示例 2:
 * 
 * 输入: "IV"
 * 输出: 4
 * 示例 3
 * 
 * 
 * 输入: "IX"
 * 输出: 9
 * 示例 4
 * 
 * 
 * 输入: "LVIII"
 * 输出: 58
 * 解释: C = 100, L = 50, XXX = 30, III = 3.
 * 示例 5:
 * 
 * 输入: "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

 /**
  * 根据最左确定数的最高位
  * 
  */

 /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = 0
    let heightNum = s[0]
    let len = s.length
    let lastNum = s[len-1]

    if(heightNum === "V" && lastNum === "V"){
        number = 5
    }else if(heightNum === "I" && lastNum === "V"){
        number = 4
    }else if(heightNum === "I" && lastNum !== "V" ){
        number += 1
    }else if(heightNum === "V" && lastNum !== "V"){
        number += 5
        for(let i = 1; i < len; i++){
            number ++
        }
    }else if(heightNum === "I" && lastNum === "X"){
        number = 9
    }else if(heightNum === "X" && lastNum === "X"){
        number = 10
    }else if(heightNum === "X" && lastNum !== "X"){

    }

};

//关于JavaScript中， 二进制、 十进制、 八进制、 十六进制之间的转换
//
/**
 * 这里需要分为两部分:
 *     1. 其他进制转为 10进制
 *     2. 10进制转为其他进制  
 * 
 * 在处理以上的进制转换问题时， javaScript提供了原生的方法。toString 和 parseInt
 * var x = 110 //十进制
 * x.toString(2)//转为二进制
 * x.toString(8)//转为八进制
 * x.toString(16)//转为十六进制
 * 
 * var x = 110//这里是二进制， 或者八进制， 或者十六进制。 转为十进制
 * parseInt(x, 2)//当做二进制换为10进制
 * parseInt(x, 8)//当做八进制换为10进制
 * parseInt(x, 16)//当做十六进制换为10进制
 * 
 * 
 * 
 */

