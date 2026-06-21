package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SubarrayProductLessThanKTest {
    private final SubarrayProductLessThanK solution = new SubarrayProductLessThanK();

    @Test
    void examples() {
        assertEquals(8, solution.numSubarrayProductLessThanK(new int[]{10,5,2,6}, 100));
        assertEquals(0, solution.numSubarrayProductLessThanK(new int[]{1,2,3}, 0));
    }
}
