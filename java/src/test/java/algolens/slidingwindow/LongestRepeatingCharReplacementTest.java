package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LongestRepeatingCharReplacementTest {
    private final LongestRepeatingCharReplacement solution = new LongestRepeatingCharReplacement();

    @Test
    void examples() {
        assertEquals(4, solution.characterReplacement("ABAB", 2));
        assertEquals(4, solution.characterReplacement("AABABBA", 1));
    }
}
