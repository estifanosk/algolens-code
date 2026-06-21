from sliding_window.longest_repeating_char_replacement import Solution


def test_examples():
    solution = Solution()
    assert solution.characterReplacement("ABAB", 2) == 4
    assert solution.characterReplacement("AABABBA", 1) == 4
