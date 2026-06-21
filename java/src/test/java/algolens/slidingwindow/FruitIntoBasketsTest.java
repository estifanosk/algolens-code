package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FruitIntoBasketsTest {
    private final FruitIntoBaskets solution = new FruitIntoBaskets();

    @Test
    void examples() {
        assertEquals(3, solution.totalFruit(new int[]{1,2,1}));
        assertEquals(3, solution.totalFruit(new int[]{0,1,2,2}));
    }
}
