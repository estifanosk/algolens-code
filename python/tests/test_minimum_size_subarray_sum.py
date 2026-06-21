from sliding_window.minimum_size_subarray_sum import Solution


def test_examples():
    solution = Solution()
    assert solution.minSubArrayLen(7, [2,3,1,2,4,3]) == 2
    assert solution.minSubArrayLen(4, [1,4,4]) == 1
