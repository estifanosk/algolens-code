from sliding_window.minimum_window_substring import Solution


def test_examples():
    solution = Solution()
    assert solution.minWindow("ADOBECODEBANC", "ABC") == "BANC"
    assert solution.minWindow("a", "a") == "a"
