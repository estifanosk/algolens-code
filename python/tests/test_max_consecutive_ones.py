from sliding_window.max_consecutive_ones import Solution


def test_examples():
    solution = Solution()
    assert solution.longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) == 6
    assert solution.longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3) == 10
