package algolens.greedy;

public class GreedyMain {
    public static void main(String[] args) {
        GreedyAlgorithms solution = new GreedyAlgorithms();

        assertEquals(1, solution.findContentChildrenBruteForce(new int[]{1,2,3}, new int[]{1,1}), "assign-cookies brute force");
        assertEquals(1, solution.findContentChildren(new int[]{1,2,3}, new int[]{1,1}), "assign-cookies");
        assertEquals(true, solution.lemonadeChangeBruteForce(new int[]{5,5,5,10,20}), "lemonade-change brute force");
        assertEquals(true, solution.lemonadeChange(new int[]{5,5,5,10,20}), "lemonade-change");
        assertEquals(2, solution.jumpBruteForce(new int[]{2,3,1,1,4}), "jump-game-ii brute force");
        assertEquals(2, solution.jump(new int[]{2,3,1,1,4}), "jump-game-ii");
        assertEquals(3, solution.canCompleteCircuitBruteForce(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}), "gas-station brute force");
        assertEquals(3, solution.canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}), "gas-station");
        assertEquals(true, solution.canPlaceFlowersBruteForce(new int[]{1,0,0,0,1}, 1), "can-place-flowers brute force");
        assertEquals(true, solution.canPlaceFlowers(new int[]{1,0,0,0,1}, 1), "can-place-flowers");
        assertQueueValid(solution.reconstructQueueBruteForce(new int[][]{{7,0},{4,4},{7,1},{5,0},{6,1},{5,2}}));
        assertQueueValid(solution.reconstructQueue(new int[][]{{7,0},{4,4},{7,1},{5,0},{6,1},{5,2}}));
        assertEquals("9,7,8", join(solution.partitionLabelsBruteForce("ababcbacadefegdehijhklij")), "partition-labels brute force");
        assertEquals("9,7,8", join(solution.partitionLabels("ababcbacadefegdehijhklij")), "partition-labels");
        assertEquals(true, solution.checkValidStringBruteForce("(*))"), "valid-parenthesis-string brute force");
        assertEquals(true, solution.checkValidString("(*))"), "valid-parenthesis-string");
        assertEquals(true, solution.isNStraightHandBruteForce(new int[]{1,2,3,6,2,3,4,7,8}, 3), "hand-of-straights brute force");
        assertEquals(true, solution.isNStraightHand(new int[]{1,2,3,6,2,3,4,7,8}, 3), "hand-of-straights");
        assertEquals(1, solution.minAddToMakeValidBruteForce("())"), "minimum-add-parentheses brute force");
        assertEquals(1, solution.minAddToMakeValid("())"), "minimum-add-parentheses");

        System.out.println("All greedy Java checks passed.");
    }

    private static void assertQueueValid(int[][] queue) {
        for (int i = 0; i < queue.length; i++) {
            int count = 0;
            for (int j = 0; j < i; j++) {
                if (queue[j][0] >= queue[i][0]) count++;
            }
            assertEquals(queue[i][1], count, "queue-reconstruction-height");
        }
    }

    private static String join(java.util.List<Integer> values) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < values.size(); i++) {
            if (i > 0) builder.append(",");
            builder.append(values.get(i));
        }
        return builder.toString();
    }

    private static void assertEquals(Object expected, Object actual, String name) {
        if (!expected.equals(actual)) {
            throw new AssertionError(name + " expected " + expected + " but got " + actual);
        }
    }
}
