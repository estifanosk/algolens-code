from sliding_window.best_time_to_buy_stock import Solution


def test_examples():
    solution = Solution()
    assert solution.maxProfit([7,1,5,3,6,4]) == 5
    assert solution.maxProfit([7,6,4,3,1]) == 0
