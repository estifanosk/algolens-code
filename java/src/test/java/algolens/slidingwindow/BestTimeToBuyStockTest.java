package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BestTimeToBuyStockTest {
    private final BestTimeToBuyStock solution = new BestTimeToBuyStock();

    @Test
    void examples() {
        assertEquals(5, solution.maxProfit(new int[]{7,1,5,3,6,4}));
        assertEquals(0, solution.maxProfit(new int[]{7,6,4,3,1}));
    }
}
