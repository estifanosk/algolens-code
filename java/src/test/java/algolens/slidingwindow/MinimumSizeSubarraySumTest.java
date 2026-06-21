package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MinimumSizeSubarraySumTest {
    private final MinimumSizeSubarraySum solution = new MinimumSizeSubarraySum();

    @Test
    void examples() {
        assertEquals(2, solution.minSubArrayLen(7, new int[]{2,3,1,2,4,3}));
        assertEquals(1, solution.minSubArrayLen(4, new int[]{1,4,4}));
    }
}
