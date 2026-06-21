from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        left = 0
        right = len(nums) - 1
        write = len(nums) - 1
        result = [0] * len(nums)
        while left <= right:
            left_square = nums[left] * nums[left]
            right_square = nums[right] * nums[right]
            if left_square > right_square:
                result[write] = left_square
                left += 1
            else:
                result[write] = right_square
                right -= 1
            write -= 1
        return result
