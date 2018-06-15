/**
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度。
 * 说明：
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 
 * 示例 1:
 * 给定 matrix = 
 * [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ],
 * 原地旋转输入矩阵，使其变为:
 * [
 * [7,4,1],
 * [8,5,2],
 * [9,6,3]
 * ]
 */


let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

let matrix1 = [
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
    ]
    

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {//开发版
    let oldVal = ""
    let tempVal = ""
    let arr = []
    let len = matrix.length - 1
    function _changeFunc(i, j){
        return [j, len - i]
    }


    for(let i = 0; i < matrix.length; i++ ){
        for(let j = i; j < matrix[i].length - i - 1; j++){
            arr = [i, j]
            console.log(arr)
            oldVal = matrix[i][j]
            for(let k = 0; k < 4; k++ ){
                arr = _changeFunc(arr[0], arr[1])
                console.log(arr)
                tempVal = matrix[arr[0]][arr[1]]
                console.log(`tempVal:${tempVal}`)

                matrix[arr[0]][arr[1]]  = oldVal

                oldVal = tempVal
                console.log(matrix)
            }
            console.log("---------------------------------")
        
        }
    }

    console.log(matrix)
};

var rotate = function(matrix) {
    let oldVal = ""
    let tempVal = ""
    let arr = []
    let len = matrix.length - 1
    function _changeFunc(i, j){
        return [j, len - i]
    }
    for(let i = 0; i < matrix.length; i++ ){
        for(let j = i; j < matrix[i].length - i - 1; j++){
            arr = [i, j]
            oldVal = matrix[i][j]
            for(let k = 0; k < 4; k++ ){
                arr = _changeFunc(arr[0], arr[1])
                tempVal = matrix[arr[0]][arr[1]]
                matrix[arr[0]][arr[1]]  = oldVal
                oldVal = tempVal
            }
        }
    }
};


var rotate = function (matrix) {//leetcode上面的优质答案
    matrix.reverse()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[0].length; j++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
};

rotate(matrix1)