package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MaximumAverageSubarrayTest {
    private final MaximumAverageSubarray solution = new MaximumAverageSubarray();

    @Test
    void examples() {
        assertEquals(12.75, solution.findMaxAverage(new int[]{1,12,-5,-6,50,3}, 4), 0.00001);
        assertEquals(5.0, solution.findMaxAverage(new int[]{5}, 1), 0.00001);
    }
}
