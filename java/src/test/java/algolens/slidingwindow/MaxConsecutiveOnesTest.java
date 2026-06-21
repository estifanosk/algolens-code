package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MaxConsecutiveOnesTest {
    private final MaxConsecutiveOnes solution = new MaxConsecutiveOnes();

    @Test
    void examples() {
        assertEquals(6, solution.longestOnes(new int[]{1,1,1,0,0,0,1,1,1,1,0}, 2));
        assertEquals(10, solution.longestOnes(new int[]{0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1}, 3));
    }
}
