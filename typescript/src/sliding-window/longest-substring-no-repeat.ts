export class LongestSubstringNoRepeat {
  lengthOfLongestSubstring(s: string): number {
    const seen = new Set<string>();
    let left = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {
      while (seen.has(s[right])) {
        seen.delete(s[left]);
        left++;
      }
      seen.add(s[right]);
      best = Math.max(best, right - left + 1);
    }

    return best;
  }
}
