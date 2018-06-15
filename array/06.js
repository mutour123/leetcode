/**
 * 给定两个数组，写一个方法来计算它们的交集。
 */

 let nums1 = [1, 2, 2, 1]
 let  nums2 = [2, 2]
var intersect = function(nums1, nums2) {
    let arr = []
    for(let i = 0; i < nums1.length; i++){
        let index = nums2.indexOf(nums1[i])
        if( index !== -1){
            arr.push(nums2.splice(index, 1)[0]) 
        }
    }    
    return arr
};

intersect(nums1, nums2)