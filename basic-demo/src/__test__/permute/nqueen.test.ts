import solveNQueens from "../../permute/NQueens";

test("测试N皇后问题", () => {
  const result = solveNQueens(3);
  console.log(result)

  const result2 = solveNQueens(4);
  console.log(result2)
})