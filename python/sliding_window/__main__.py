from sliding_window.best_time_to_buy_stock import Solution as BestTimeToBuyStock
from sliding_window.fruit_into_baskets import Solution as FruitIntoBaskets
from sliding_window.longest_repeating_char_replacement import Solution as LongestRepeatingCharReplacement
from sliding_window.longest_substring_no_repeat import Solution as LongestSubstringNoRepeat
from sliding_window.max_consecutive_ones import Solution as MaxConsecutiveOnes
from sliding_window.maximum_average_subarray import Solution as MaximumAverageSubarray
from sliding_window.minimum_size_subarray_sum import Solution as MinimumSizeSubarraySum
from sliding_window.minimum_window_substring import Solution as MinimumWindowSubstring
from sliding_window.permutation_in_string import Solution as PermutationInString
from sliding_window.subarray_product_less_than_k import Solution as SubarrayProductLessThanK


def assert_equal(expected, actual, name):
    if expected != actual:
        raise AssertionError(f"{name} expected {expected!r} but got {actual!r}")


def assert_float_equal(expected, actual, name):
    if abs(expected - actual) > 0.00001:
        raise AssertionError(f"{name} expected {expected!r} but got {actual!r}")


def main():
    assert_equal(6, MaxConsecutiveOnes().longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2), "max-consecutive-ones")
    assert_equal(3, LongestSubstringNoRepeat().lengthOfLongestSubstring("abcabcbb"), "longest-substring-no-repeat")
    assert_equal(5, BestTimeToBuyStock().maxProfit([7,1,5,3,6,4]), "best-time-to-buy-stock")
    assert_equal("BANC", MinimumWindowSubstring().minWindow("ADOBECODEBANC", "ABC"), "minimum-window-substring")
    assert_equal(True, PermutationInString().checkInclusion("ab", "eidbaooo"), "permutation-in-string")
    assert_equal(4, LongestRepeatingCharReplacement().characterReplacement("AABABBA", 1), "longest-repeating-char-replacement")
    assert_float_equal(12.75, MaximumAverageSubarray().findMaxAverage([1,12,-5,-6,50,3], 4), "max-sum-subarray-k")
    assert_equal(2, MinimumSizeSubarraySum().minSubArrayLen(7, [2,3,1,2,4,3]), "minimum-size-subarray-sum")
    assert_equal(3, FruitIntoBaskets().totalFruit([0,1,2,2]), "fruit-into-baskets")
    assert_equal(8, SubarrayProductLessThanK().numSubarrayProductLessThanK([10,5,2,6], 100), "subarray-product-less-than-k")

    print("All sliding-window Python checks passed.")


if __name__ == "__main__":
    main()
