from two_pointers.container_with_most_water import Solution as ContainerWithMostWater
from two_pointers.move_zeroes import Solution as MoveZeroes
from two_pointers.remove_duplicates_sorted import Solution as RemoveDuplicatesSorted
from two_pointers.reverse_string import Solution as ReverseString
from two_pointers.sort_colors import Solution as SortColors
from two_pointers.squares_sorted_array import Solution as SquaresSortedArray
from two_pointers.three_sum import Solution as ThreeSum
from two_pointers.trapping_rain_water import Solution as TrappingRainWater
from two_pointers.two_sum_ii import Solution as TwoSumII
from two_pointers.valid_palindrome import Solution as ValidPalindrome


def assert_equal(expected, actual, name):
    if expected != actual:
        raise AssertionError(f"{name} expected {expected!r} but got {actual!r}")


def main():
    assert_equal([1, 2], TwoSumII().twoSum([2, 7, 11, 15], 9), "two-sum-ii")
    assert_equal(True, ValidPalindrome().isPalindrome("A man, a plan, a canal: Panama"), "valid-palindrome true")
    assert_equal(False, ValidPalindrome().isPalindrome("race a car"), "valid-palindrome false")
    assert_equal(49, ContainerWithMostWater().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), "container-with-most-water")
    assert_equal([[-1, -1, 2], [-1, 0, 1]], ThreeSum().threeSum([-1, 0, 1, 2, -1, -4]), "three-sum")

    duplicate_numbers = [1, 1, 2]
    assert_equal(2, RemoveDuplicatesSorted().removeDuplicates(duplicate_numbers), "remove-duplicates-sorted")
    assert_equal([1, 2], duplicate_numbers[:2], "remove-duplicates-sorted prefix")

    zeroes = [0, 1, 0, 3, 12]
    MoveZeroes().moveZeroes(zeroes)
    assert_equal([1, 3, 12, 0, 0], zeroes, "move-zeroes")

    assert_equal(6, TrappingRainWater().trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), "trapping-rain-water")

    colors = [2, 0, 2, 1, 1, 0]
    SortColors().sortColors(colors)
    assert_equal([0, 0, 1, 1, 2, 2], colors, "sort-colors")

    assert_equal([0, 1, 9, 16, 100], SquaresSortedArray().sortedSquares([-4, -1, 0, 3, 10]), "squares-sorted-array")

    chars = ["h", "e", "l", "l", "o"]
    ReverseString().reverseString(chars)
    assert_equal(["o", "l", "l", "e", "h"], chars, "reverse-string")

    print("All two-pointers Python checks passed.")


if __name__ == "__main__":
    main()
