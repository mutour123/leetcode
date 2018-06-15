/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 */

 //质数， 只能被1和本身整除的数

 /**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {//使用for循环， 判断是否为质数， 效率低下
    if(n <2) return 0
    let count = n-2;
    for(let i = 2; i < n; i++ ){
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0) {
                count--
                break
            }
        }
    }
    return count
};

var countPrimes = function(n) {//leetCode上的优质答案
    
    var isPrime = new Array(n)
    for (let i = 2; i < n; i++) {
        isPrime[i] = true;
    }
    console.log(isPrime)
    // Loop's ending condition is i * i < n instead of i < sqrt(n)
    // to avoid repeatedly calling an expensive function sqrt().
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) {//判断是否是质数
            isPrime[j] = false;
        }
    }
    console.log(isPrime)
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    console.log(isPrime)
    
    return count;
};


let result
console.time("time:")
result = countPrimes(10)
console.timeEnd("time:")
console.log(result)

/**
 * 判断一个数是否为质数（只能被1和本身整除的数）：
 * 
 * 更具定理可以这样写：
 *      用n除以2~n-1如果余数为0就不是了。 当然这里很明显可以优化： 用n除以2~Math.sprt(n)即可。
 * 但是这样的效率还是比较低， 还可以优化：
 *      首先看一个关于质数分布的规律：大于等于5的质数一定和6的倍数相邻。例如5和7，11和13,17和19等等；
 *       更具这一点可以只判断6i左右两个数是否是质数即可。
 * 
 * 更具以上文字， 写如下一个用于判断一个数是否是质数的函数isPrimes
 */

 var isPrime = function (n){//第一版
    for(let i = 2; i < n; i++){
        if(!(n % i)) {
            return false
        }
    }
    return true
 }
 var isPrime = function (n){//第二版
    for(let i = 2; i * i <= n; i++){
        if(!(n % i)) {
            return false
        }
    }
    return true
 }

 var isPrime = function (n){//第三版
    if(n < 6){
        //暂时不处理
        return
    }
    if((n+1) % 6 === 0 || (n-1) % 6 ===0 ){
        for(let i = 5; i * i <= n; i += 6){
            if(n % i == 0 || n % ( i + 2) == 0 )  
                return false ;  
        }
        return true
    }
    return false
 }

 console.log(isPrime(11))