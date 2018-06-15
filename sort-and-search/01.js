/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 说明:
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 */

 /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {//使用归并
//     let i = 0
//     let j = 0
//     while(i < m || j < n){
//         if(nums1[i] && nums1[i] <= nums2[j]){
//             i++
//         }else if(!nums1){
//             nums1.splice(i, 1, nums2[j])
//             j++
//             i++
//         }else{
//             nums1.splice(i, 0, nums2[j])
//             j++
//             i++
//         }
//     }

    
// };


let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6],       n = 3
var merge = function(nums1, m, nums2, n) {//使用归并。 kaifa ban 
    let i = 0
    let j = 0
    while(i < m ){
        console.log(i)
        if(j < n && nums1[i] <= nums2[j]){
            i++
        }else if(j < n && nums1[i] > nums2[j]){
            nums1.splice(i, 0, nums2[j])
            j++
            m++
            i++
            nums1.length --
        }else if(j >= n){
            break
        }
        
       
        console.log(`m->${m}`)
        console.log(`i->${i}`)
        console.log(i < m)
    }
    for( ; j < n; j++ ){
        nums1[i++] = nums2[j]
    }
    console.log(nums1)
    
};



var merge = function(nums1, m, nums2, n) {//使用归并, 完成版
    let i = 0
    let j = 0
    while(i < m ){
        if(j < n && nums1[i] <= nums2[j]){
            i++
        }else if(j < n && nums1[i] > nums2[j]){
            nums1.splice(i, 0, nums2[j])
            j++
            m++
            i++
            nums1.length --
        }else if(j >= n) break
    }
    for( ; j < n; j++ ){
        nums1[i++] = nums2[j]
    }
};

// merge(nums1, m, nums2, n)

/**
 * 以上代码使用归并的思想， 完成。 效率是比较高的。 
 * 一下代码使用sort函数直接排序的思路完成
 */

 let nums11 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
  m1 = 55
 let nums21 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9] 
 n1 = 99



var merge = function(nums1, m, nums2, n) {//使用排序
    nums1.splice(m)
    Array.prototype.splice.apply(nums1, [0,0].concat(nums2))
    nums1.sort(function(a, b){return a - b})//存在负数， 直接使用sort()函数， 会排序失败。 这里传入一个比较函数使其正确
};

merge(nums11, m1, nums21, n1)
console.log(nums11)
/**
 * 出现的问题：
 * 在使用内置函数sort进行解题时， 第一在函数内部使用nums1 = 等号赋值， 这里不会指向原来的地址， 所以在leetCode上， 检查失败， 因为
 * 原来的内存上的数据没有被改到
 * 
 * 在js中， 会改变原数组方法有：
 * splice()
 * sort()
 * reverse()
 * push()
 * pop()
 * shift()
 * unshift()
 * 
 * 所以需要在原数组中改变值的时候， 需要使用以上方法。
 * 
 * 这里使用splice方法， 但是改方法接受的参数是单个元素， 不能使用整个数组作为参数。
 * 故使用apply方法， 其实改变这种情况。
 * 
 * 第二个问题是： sort()方法的使用。
 * 因为数组中包含负数。 所以如果直接使用sort方法会出现排序失败的情况。
 * 这里使用一个比较函数作为参数传入sort方法中。使其可以排序成功
 * 比较函数如下：
 * function (a, b){
 *  return a -b//这里是是升序排序
 * }
 * 
 * 这里做个说明：（来自知乎）
 * chrome浏览器使用的v8引擎，使用了快速排序（它属于交换排序）
 * 大部分排序算法， 步骤分解之后， 最细节的操作都是两个数的相互比较。
 * js中sort默认情况下是会将数组字符串方式依赖字典顺序进行排序， 也就是如果要处理
 * 的事字符串类型的数组， 直接使用sort方法就可以， 不需要提供参数，； 数值类型的数组不提供自定义排序方法的话，
 * 会返回预期外的结果
 * 如果传入函数作为参数， 函数返回值为负数时， 代表第一个比第二个小， 0 代表相等， 正数代表参数一大于参数二。 这里的大和小时相对的概念， 由于
 * 比较函数确定的小数排序完成后会排在前面。 
 * 
 * 
 * 总之就是， sort会将较小的元素排在前面， 如何约定那个元素较小？
 * 如果没有比较函数作为参数出入， 那就sort函数将会按照字典顺序排序（一般来说好像是ascll的排序）
 * 如果传入了比较函数， 那么元素的大小将由比较函数确定， 如何确定？
 * function(a, b)(return a- b)
 * 如上：比较函数返回正， 代表a 大于b, 就会将b排在前面
 * 如果返回为负数， 代表a 小于 b, 会将a排在前面
 * 
 * 所以如果我们给结果加一个负号， 就会颠倒他们。
 * 
 * 如果你要问 sort函数会在什么时候调用？
 * 这个问题， 由于没有看源码， 只能理解加猜测的说：
 * 由于内部排序使用快速排序。 都会进行两个数的比较， 以决定两个数的相对位置， 
 * 在比较的时候， 就会调用我们传入的函数。
 * 
 * 如果我们使用简单的冒泡函数来模拟一下sort函数， 如下：
 * Array.prototype.msort = function(sorter){
 *    
 *    var len = this.length
 *    var a, b, temp
 *    for(let i = 1; i < len; i ++){
 *        
 *              if(this[i] < this[i-1]){//如果后面一个元素大于前面一个参数， 
 *                  swap(this[i], this[i-1])//交换两个元素的位置， 使其小的在前面
 *              }
 *  · 
 *        
 * 

 
 *    }  
 * }
 * 
 * 以上。
 * 
 * 如果有错请指正， 谢谢
 * 
 * 
 *  
 */

