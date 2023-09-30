import permute from '../../permute/Permute';

test("回溯算法-全排列", () => {
  const nums = [1, 2, 3];

  const result = permute(nums);
  console.log(result);
})