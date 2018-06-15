let nums = [1,1,1,3,3,4,3,2,4,2]
let nums1 =  [1, 3, 4, 2 ]
var containsDuplicate = function(nums) {
    if(nums.length <= 1){
        return false
    }
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        }else{
            set.add(nums[i])
        }
    }
    return false
};


var containsDuplicate = function(nums) {
    let set = new Set(nums)
    if(nums.lengt < 2){
        return false
    }
    if(set.size === nums.length){
        return false
    }
}

let result = containsDuplicate([1])
console.log(result)