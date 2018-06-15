/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]

let board1 = [
    [".",".","5",".",".",".",".",".","."],
    [".",".",".","8",".",".",".","3","."],
    [".","5",".",".","2",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","9"],
    [".",".",".",".",".",".","4",".","."],
    [".",".",".",".",".",".",".",".","7"],
    [".","1",".",".",".",".",".",".","."],
    ["2","4",".",".",".",".","9",".","."]
]

 /**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {//开发版
    //i代表行， j代表列
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if( board[i][j] !== "."){
                //判断每一行是否符合要求
                for(let k = j + 1; k < board[i].length; k++){
                    if(board[i][k] === board[i][j]){
                        // console.log(i +"行--"+k+"列--"+board[i][k]+"----no")
                        return false
                    }
                }
               
                //判断每一列是否符合要求
                for(let g = i +1 ; g < board.length; g ++){
                    if( board[g][j] === board[i][j]){
                        // console.log(g +"行--"+j+"列--"+board[g][j]+"----no")
                        return false
                    }
                }
            

                //判断每一个格子是否符合要求
                let GroupI = Math.ceil(( i + 1) / 3)
                let GroupJ = Math.ceil(( j + 1) / 3)
                // console.log(`GroupI: ${GroupI}`)
                // console.log(`GroupJ: ${GroupJ}`)
                for(let a = GroupI * 3 - 3; a < GroupI * 3; a++) {
                    if (a === i){
                        continue
                    }
                    for( let b = GroupJ * 3 - 3; b < GroupJ * 3; b++){
                        if( b === j){
                            continue
                        }
                        if(board[i][j] == board[a][b]){
                            // console.log(`这里判断相等：->${board[i][j]} ==${board[a][b]}`) 
                            // console.log(`${i}行--${j}列的值为===${board[i][j]}`)
                            // console.log(`${a}行--${b}列的值为===${board[a][b]}`)
                            // console.log(a +"行--"+b+"列--"+board[a][b]+"----no")
                            return false
                        }
                    }
        
                }
            }
        }
    }
    return true
};


var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if( board[i][j] !== "."){
                //判断每一行是否符合要求
                for(let k = j + 1; k < board[i].length; k++)
                    if(board[i][k] === board[i][j]) return false

                //判断每一列是否符合要求
                for(let g = i +1 ; g < board.length; g ++)
                    if( board[g][j] === board[i][j]) return false

                //判断每一组是否符合
                let GroupI = Math.ceil(( i + 1) / 3)
                let GroupJ = Math.ceil(( j + 1) / 3)
                for(let a = GroupI * 3 - 3; a < GroupI * 3; a++) {
                    if (a === i)  continue
                    for( let b = GroupJ * 3 - 3; b < GroupJ * 3; b++){
                        if( b === j) continue
                        if(board[i][j] == board[a][b]) return false
                    }
                }
            }
        }
    }
    return true
};


let result = isValidSudoku(board1)
console.log(result)