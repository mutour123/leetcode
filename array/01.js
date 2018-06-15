
var nums = [0,0,1,1,1,2,2,3,3,4,4];
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1]){
            nums.splice(i, 1)
            i--
        }
    }
    return nums.lenght
}



removeDuplicates(nums)

