package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PermutationInStringTest {
    private final PermutationInString solution = new PermutationInString();

    @Test
    void examples() {
        assertTrue(solution.checkInclusion("ab", "eidbaooo"));
        assertFalse(solution.checkInclusion("ab", "eidboaoo"));
    }
}
