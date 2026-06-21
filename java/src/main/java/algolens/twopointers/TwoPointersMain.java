package algolens.twopointers;

import java.util.Arrays;
import java.util.List;

public class TwoPointersMain {
    public static void main(String[] args) {
        assertArrayEquals(new int[]{1, 2}, new TwoSumII().twoSum(new int[]{2, 7, 11, 15}, 9), "two-sum-ii");
        assertEquals(true, new ValidPalindrome().isPalindrome("A man, a plan, a canal: Panama"), "valid-palindrome true");
        assertEquals(false, new ValidPalindrome().isPalindrome("race a car"), "valid-palindrome false");
        assertEquals(49, new ContainerWithMostWater().maxArea(new int[]{1,8,6,2,5,4,8,3,7}), "container-with-most-water");
        assertEquals(List.of(List.of(-1, -1, 2), List.of(-1, 0, 1)), new ThreeSum().threeSum(new int[]{-1,0,1,2,-1,-4}), "three-sum");

        int[] duplicateNumbers = {1, 1, 2};
        assertEquals(2, new RemoveDuplicatesSorted().removeDuplicates(duplicateNumbers), "remove-duplicates-sorted");
        assertArrayEquals(new int[]{1, 2}, Arrays.copyOf(duplicateNumbers, 2), "remove-duplicates-sorted prefix");

        int[] zeroes = {0, 1, 0, 3, 12};
        new MoveZeroes().moveZeroes(zeroes);
        assertArrayEquals(new int[]{1, 3, 12, 0, 0}, zeroes, "move-zeroes");

        assertEquals(6, new TrappingRainWater().trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}), "trapping-rain-water");

        int[] colors = {2, 0, 2, 1, 1, 0};
        new SortColors().sortColors(colors);
        assertArrayEquals(new int[]{0, 0, 1, 1, 2, 2}, colors, "sort-colors");

        assertArrayEquals(new int[]{0, 1, 9, 16, 100}, new SquaresSortedArray().sortedSquares(new int[]{-4,-1,0,3,10}), "squares-sorted-array");

        char[] chars = {'h', 'e', 'l', 'l', 'o'};
        new ReverseString().reverseString(chars);
        assertArrayEquals(new char[]{'o', 'l', 'l', 'e', 'h'}, chars, "reverse-string");

        System.out.println("All two-pointers Java checks passed.");
    }

    private static void assertEquals(Object expected, Object actual, String name) {
        if (!expected.equals(actual)) {
            throw new AssertionError(name + " expected " + expected + " but got " + actual);
        }
    }

    private static void assertArrayEquals(int[] expected, int[] actual, String name) {
        if (!Arrays.equals(expected, actual)) {
            throw new AssertionError(name + " expected " + Arrays.toString(expected) + " but got " + Arrays.toString(actual));
        }
    }

    private static void assertArrayEquals(char[] expected, char[] actual, String name) {
        if (!Arrays.equals(expected, actual)) {
            throw new AssertionError(name + " expected " + Arrays.toString(expected) + " but got " + Arrays.toString(actual));
        }
    }
}
