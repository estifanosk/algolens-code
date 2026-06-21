from sliding_window.maximum_average_subarray import Solution


def test_examples():
    solution = Solution()
    assert solution.findMaxAverage([1,12,-5,-6,50,3], 4) == 12.75
    assert solution.findMaxAverage([5], 1) == 5.0
