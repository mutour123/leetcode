/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [1,2,3,4,5,6,7]
let k = 3


var rotate = function(nums, k) {//单步移动， 时间效率低下
    for(let i =0; i < k; i++){
        let temp = nums[nums.length-1]
        for(let j = nums.length - 1 ; j > 0; j--){
            nums[j] = nums[j- 1]
        }
        nums[0] = temp
    }
    console.log(nums)
}

var rotate = function(nums, k) {//切串的方法，但是注意要修改内存中的数组对象。
    let len = nums.length
    if(len === k) {
        return
    }
    let temp = nums.splice(len - k, k)
    Array.prototype.splice.apply(nums, [0,0].concat(temp))//
    
    
}

rotate(nums, k)
console.log(nums)