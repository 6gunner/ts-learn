// 全排列问题

/**
 * 输入一组不重复的数字，返回他们的全排列
 */
function permute(nums: number[]) {

  const res: Array<Array<number>> = [];
  const track = [];
  backtrack(nums, track, res);
  return res;
}

// 路径：记录在track里
// 选择列表：nums里不存在track里的元素
// 结束条件：nums里的元素全部在track中出现
function backtrack(nums: number[], track: number[], res: number[][]) {

  if (track.length == nums.length) {
    // copy track
    res.push(track.concat());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (track.includes(num)) {
      continue;
    }
    track.push(num);
    backtrack(nums, track, res);
    track.pop();
  }

}

export default permute;
