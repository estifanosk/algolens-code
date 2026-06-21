export class MaximumAverageSubarray {
  findMaxAverage(nums: number[], k: number): number {
    let windowSum = nums.slice(0, k).reduce((sum, value) => sum + value, 0);
    let bestSum = windowSum;

    for (let right = k; right < nums.length; right++) {
      windowSum += nums[right] - nums[right - k];
      bestSum = Math.max(bestSum, windowSum);
    }

    return bestSum / k;
  }
}
