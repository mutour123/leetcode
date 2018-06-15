/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
let nums = [3,2,3]
let target = 6

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
      for(let j = i+1; j < nums.length; j ++){
          let tatol = nums[i] + nums[j]
          if(tatol == target){
              console.log([i, j])
              return [i, j]
          }
      }
  }  
};

var twoSum = function(nums, target) {
    let hashTable = {};
    for(let i = 0;i < nums.length;i ++){
        let complement = target - nums[i];
        if(hashTable.hasOwnProperty(complement)){
            return [hashTable[complement],i];
        }else{
            hashTable[nums[i]] = i;
        }
    }
    
};


twoSum(nums, target)