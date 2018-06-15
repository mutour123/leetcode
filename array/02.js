

let prices = [7,1,5,3,6,4]
let prices1 = [1,2,3,4,5]
let prices2 = [7,6,4,3,1]
let prices3 = [6,1, 3,2,4,7]
//使用动态规划
var maxProfit = function(prices) {
    let notUseArr = [prices[0]];//初始为装只装了第一个元素的数组
    let usedMin = 0;//一直只有一个
    let currentMax = 0;//最大值

    for(let i = 1; i < prices.length; i++) {//循环

        let notUseMin = notUseArr.pop()
        let temp = ( prices[i] - notUseMin)
        if(  temp > 0) {
            currentMax += temp
            usedMin = notUseMin
            console.log("直接相加的："+i+":")
        }else{
            if(!usedMin) {//如果还没有买过（一直没有碰到后面比前面的大）
                notUseArr.push(notUseMin)
                notUseArr.push(prices[i]) 
                console.log("没有相加的："+i)
                
            }else{
                let temp = prices[i] - usedMin       
                if (temp > currentMax ){
                    currentMax = temp
                }else{
                    notUseArr.push(notUseMin)
                    notUseArr.push(prices[i]) 
                }
            }    
           
        }

        console.log(notUseArr)
        console.log("最小值:"+usedMin)
        console.log("最大值为："+currentMax)
        console.log("----------------------")
        

    }
    console.log(currentMax)
};


/**
 * 上面的方法使用动态规划， 结果有错。例如使用prices3.
 * 下面的方法正确。
 * 注意： 对于数字的相减最大值， 等于分布相减的最大值
 */

var maxProfit = function (prices){
    let max = 0;
    for(let i = 1; i < prices.length; i++){
        let temp = prices[i] - prices[i-1]
        if (temp > 0){
            max += temp
        }
    }
    return max
}

let result = maxProfit(prices)
console.log(result)