from sliding_window.permutation_in_string import Solution


def test_examples():
    solution = Solution()
    assert solution.checkInclusion("ab", "eidbaooo") is True
    assert solution.checkInclusion("ab", "eidboaoo") is False
