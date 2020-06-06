/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const targetValue = target - nums[i];
    if (indexMap.has(targetValue)) {
      return [indexMap.get(targetValue), i];
    }
    indexMap.set(nums[i], i);
  }
};
