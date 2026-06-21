export class LongestRepeatingCharReplacement {
  characterReplacement(s: string, k: number): number {
    const counts = new Array<number>(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {
      const idx = s.charCodeAt(right) - "A".charCodeAt(0);
      counts[idx]++;
      maxFreq = Math.max(maxFreq, counts[idx]);

      while (right - left + 1 - maxFreq > k) {
        counts[s.charCodeAt(left) - "A".charCodeAt(0)]--;
        left++;
      }

      best = Math.max(best, right - left + 1);
    }

    return best;
  }
}
