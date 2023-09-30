/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n: number): string[][] {
  // 定义棋盘
  const board = initBoard(n);
  const result = [];
  backtrack(board, 0, result);
  return result;
};

function initBoard(n: number): string[][] {
  const board = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(".");
    }
    board.push(row);
  }
  return board;
}

/**
 * 回溯问题 路径：board中小于row的那些行，已经成功放置了Q
 * 选择列表：第row行里所有的列都可以选择放置Q
 * 结束条件：row超过board的最后一行，说明棋盘放满了
 * @param board 棋盘
 * @param row 第row行
 * @param result 结果
 */
function backtrack(board: string[][], row: number, result: string[][]) {
  if (row == board.length) {
    result.push(board.map(row => row.join('')));
    return;
  }
  // 定位到当前棋盘这一行
  let n = board[row].length;
  for (let col = 0; col < n; col++) {

    if (isValid(row, col, board)) {
      board[row][col] = 'Q'; // 做出选择
      backtrack(board, row + 1, result);
      board[row][col] = '.';// 撤销决策
    }
  }
}


export default solveNQueens;


function isValid(row: number, col: number, board: string[][]): boolean {
  let n = board.length;

  if (row == 0) {
    return true;
  }

  // 正上方不能有棋子
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (board[i][col] == 'Q') {
      return false
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    // 左上不能有棋子
    if (board[i][j] == 'Q') {
      return false;
    }
  }


  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    // 右上不能有棋子
    if (board[i][j] == 'Q') {
      return false;
    }
  }

  return true;

}

