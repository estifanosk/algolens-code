package algolens.greedy;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class GreedyAlgorithmsTest {
    private final GreedyAlgorithms solution = new GreedyAlgorithms();

    @Test
    void assignCookiesExamples() {
        assertEquals(1, solution.findContentChildrenBruteForce(new int[]{1,2,3}, new int[]{1,1}));
        assertEquals(1, solution.findContentChildren(new int[]{1,2,3}, new int[]{1,1}));
        assertEquals(2, solution.findContentChildrenBruteForce(new int[]{1,2}, new int[]{1,2,3}));
        assertEquals(2, solution.findContentChildren(new int[]{1,2}, new int[]{1,2,3}));
    }

    @Test
    void lemonadeChangeExamples() {
        assertTrue(solution.lemonadeChangeBruteForce(new int[]{5,5,5,10,20}));
        assertTrue(solution.lemonadeChange(new int[]{5,5,5,10,20}));
        assertFalse(solution.lemonadeChangeBruteForce(new int[]{5,5,10,10,20}));
        assertFalse(solution.lemonadeChange(new int[]{5,5,10,10,20}));
    }

    @Test
    void jumpGameTwoExamples() {
        assertEquals(2, solution.jumpBruteForce(new int[]{2,3,1,1,4}));
        assertEquals(2, solution.jump(new int[]{2,3,1,1,4}));
        assertEquals(2, solution.jumpBruteForce(new int[]{2,3,0,1,4}));
        assertEquals(2, solution.jump(new int[]{2,3,0,1,4}));
    }

    @Test
    void gasStationExamples() {
        assertEquals(3, solution.canCompleteCircuitBruteForce(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        assertEquals(3, solution.canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        assertEquals(-1, solution.canCompleteCircuitBruteForce(new int[]{2,3,4}, new int[]{3,4,3}));
        assertEquals(-1, solution.canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3}));
    }

    @Test
    void canPlaceFlowersExamples() {
        assertTrue(solution.canPlaceFlowersBruteForce(new int[]{1,0,0,0,1}, 1));
        assertTrue(solution.canPlaceFlowers(new int[]{1,0,0,0,1}, 1));
        assertFalse(solution.canPlaceFlowersBruteForce(new int[]{1,0,0,0,1}, 2));
        assertFalse(solution.canPlaceFlowers(new int[]{1,0,0,0,1}, 2));
    }

    @Test
    void queueReconstructionExample() {
        int[][] people = {{7,0},{4,4},{7,1},{5,0},{6,1},{5,2}};
        assertQueueValid(solution.reconstructQueueBruteForce(people));
        assertQueueValid(solution.reconstructQueue(people));
    }

    @Test
    void partitionLabelsExamples() {
        assertEquals(List.of(9, 7, 8), solution.partitionLabelsBruteForce("ababcbacadefegdehijhklij"));
        assertEquals(List.of(9, 7, 8), solution.partitionLabels("ababcbacadefegdehijhklij"));
        assertEquals(List.of(10), solution.partitionLabelsBruteForce("eccbbbbdec"));
        assertEquals(List.of(10), solution.partitionLabels("eccbbbbdec"));
    }

    @Test
    void validParenthesisStringExamples() {
        assertTrue(solution.checkValidStringBruteForce("(*)"));
        assertTrue(solution.checkValidString("(*)"));
        assertTrue(solution.checkValidStringBruteForce("(*))"));
        assertTrue(solution.checkValidString("(*))"));
    }

    @Test
    void handOfStraightsExamples() {
        assertTrue(solution.isNStraightHandBruteForce(new int[]{1,2,3,6,2,3,4,7,8}, 3));
        assertTrue(solution.isNStraightHand(new int[]{1,2,3,6,2,3,4,7,8}, 3));
        assertFalse(solution.isNStraightHandBruteForce(new int[]{1,2,3,4,5}, 4));
        assertFalse(solution.isNStraightHand(new int[]{1,2,3,4,5}, 4));
    }

    @Test
    void minimumAddExamples() {
        assertEquals(1, solution.minAddToMakeValidBruteForce("())"));
        assertEquals(1, solution.minAddToMakeValid("())"));
        assertEquals(3, solution.minAddToMakeValidBruteForce("((("));
        assertEquals(3, solution.minAddToMakeValid("((("));
    }

    private void assertQueueValid(int[][] queue) {
        for (int i = 0; i < queue.length; i++) {
            int count = 0;
            for (int j = 0; j < i; j++) {
                if (queue[j][0] >= queue[i][0]) count++;
            }
            assertEquals(queue[i][1], count);
        }
    }
}
