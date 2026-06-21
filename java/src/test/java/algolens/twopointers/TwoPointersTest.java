package algolens.twopointers;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class TwoPointersTest {
    @Test
    void examples() {
        assertArrayEquals(new int[] {1, 2}, new TwoSumII().twoSum(new int[] {2, 7, 11, 15}, 9));
        assertTrue(new ValidPalindrome().isPalindrome("A man, a plan, a canal: Panama"));
        assertFalse(new ValidPalindrome().isPalindrome("race a car"));
        assertEquals(49, new ContainerWithMostWater().maxArea(new int[] {1,8,6,2,5,4,8,3,7}));

        List<List<Integer>> triples = new ThreeSum().threeSum(new int[] {-1,0,1,2,-1,-4});
        assertEquals(List.of(List.of(-1, -1, 2), List.of(-1, 0, 1)), triples);

        int[] duplicates = {1, 1, 2};
        assertEquals(2, new RemoveDuplicatesSorted().removeDuplicates(duplicates));
        assertArrayEquals(new int[] {1, 2}, new int[] {duplicates[0], duplicates[1]});

        int[] zeroes = {0, 1, 0, 3, 12};
        new MoveZeroes().moveZeroes(zeroes);
        assertArrayEquals(new int[] {1, 3, 12, 0, 0}, zeroes);

        assertEquals(6, new TrappingRainWater().trap(new int[] {0,1,0,2,1,0,1,3,2,1,2,1}));

        int[] colors = {2, 0, 2, 1, 1, 0};
        new SortColors().sortColors(colors);
        assertArrayEquals(new int[] {0, 0, 1, 1, 2, 2}, colors);

        assertArrayEquals(new int[] {0, 1, 9, 16, 100}, new SquaresSortedArray().sortedSquares(new int[] {-4,-1,0,3,10}));

        char[] chars = {'h', 'e', 'l', 'l', 'o'};
        new ReverseString().reverseString(chars);
        assertArrayEquals(new char[] {'o', 'l', 'l', 'e', 'h'}, chars);
    }
}
