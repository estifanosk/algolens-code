package algolens.slidingwindow;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LongestSubstringNoRepeatTest {
    private final LongestSubstringNoRepeat solution = new LongestSubstringNoRepeat();

    @Test
    void examples() {
        assertEquals(3, solution.lengthOfLongestSubstring("abcabcbb"));
        assertEquals(1, solution.lengthOfLongestSubstring("bbbbb"));
    }
}
