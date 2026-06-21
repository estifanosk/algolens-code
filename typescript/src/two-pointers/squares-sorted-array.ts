export class SquaresSortedArray {
  sortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    let write = nums.length - 1;
    const result = new Array<number>(nums.length);
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
      if (leftSquare > rightSquare) {
        result[write] = leftSquare;
        left++;
      } else {
        result[write] = rightSquare;
        right--;
      }
      write--;
    }
    return result;
  }
}
