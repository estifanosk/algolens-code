from sliding_window.subarray_product_less_than_k import Solution


def test_examples():
    solution = Solution()
    assert solution.numSubarrayProductLessThanK([10,5,2,6], 100) == 8
    assert solution.numSubarrayProductLessThanK([1,2,3], 0) == 0
