from sliding_window.fruit_into_baskets import Solution


def test_examples():
    solution = Solution()
    assert solution.totalFruit([1,2,1]) == 3
    assert solution.totalFruit([0,1,2,2]) == 3
