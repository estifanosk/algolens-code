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


def test_two_pointers_examples():
    assert TwoSumII().twoSum([2, 7, 11, 15], 9) == [1, 2]
    assert ValidPalindrome().isPalindrome("A man, a plan, a canal: Panama") is True
    assert ValidPalindrome().isPalindrome("race a car") is False
    assert ContainerWithMostWater().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    assert ThreeSum().threeSum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]]

    duplicates = [1, 1, 2]
    assert RemoveDuplicatesSorted().removeDuplicates(duplicates) == 2
    assert duplicates[:2] == [1, 2]

    zeroes = [0, 1, 0, 3, 12]
    MoveZeroes().moveZeroes(zeroes)
    assert zeroes == [1, 3, 12, 0, 0]

    assert TrappingRainWater().trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6

    colors = [2, 0, 2, 1, 1, 0]
    SortColors().sortColors(colors)
    assert colors == [0, 0, 1, 1, 2, 2]

    assert SquaresSortedArray().sortedSquares([-4, -1, 0, 3, 10]) == [0, 1, 9, 16, 100]

    chars = ["h", "e", "l", "l", "o"]
    ReverseString().reverseString(chars)
    assert chars == ["o", "l", "l", "e", "h"]
