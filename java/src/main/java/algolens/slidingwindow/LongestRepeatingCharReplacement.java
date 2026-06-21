package algolens.slidingwindow;

public class LongestRepeatingCharReplacement {
    public int characterReplacement(String s, int k) {
        int[] counts = new int[26];
        int l = 0, maxFreq = 0, best = 0;
        for (int r = 0; r < s.length(); r++) {
            int idx = s.charAt(r) - 'A';
            counts[idx]++;
            maxFreq = Math.max(maxFreq, counts[idx]);

            while (r - l + 1 - maxFreq > k) {
                counts[s.charAt(l) - 'A']--;
                l++;
            }
            best = Math.max(best, r - l + 1);
        }
        return best;
    }
}
