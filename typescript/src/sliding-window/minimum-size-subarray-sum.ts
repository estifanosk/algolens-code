export class MinimumSizeSubarraySum {
  minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let total = 0;
    let best = Number.POSITIVE_INFINITY;

    for (let right = 0; right < nums.length; right++) {
      total += nums[right];
      while (total >= target) {
        best = Math.min(best, right - left + 1);
        total -= nums[left];
        left++;
      }
    }

    return best === Number.POSITIVE_INFINITY ? 0 : best;
  }
}
