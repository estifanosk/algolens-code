package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MinimumWindowSubstringTest {
    private final MinimumWindowSubstring solution = new MinimumWindowSubstring();

    @Test
    void examples() {
        assertEquals("BANC", solution.minWindow("ADOBECODEBANC", "ABC"));
        assertEquals("a", solution.minWindow("a", "a"));
    }
}
