export class MinimumWindowSubstring {
  minWindow(s: string, t: string): string {
    if (t.length > s.length) return "";

    const need = new Map<string, number>();
    for (const char of t) {
      need.set(char, (need.get(char) ?? 0) + 1);
    }

    const window = new Map<string, number>();
    let have = 0;
    const required = need.size;
    let bestLen = Number.POSITIVE_INFINITY;
    let bestLeft = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      window.set(char, (window.get(char) ?? 0) + 1);
      if (need.has(char) && window.get(char) === need.get(char)) {
        have++;
      }

      while (have === required) {
        if (right - left + 1 < bestLen) {
          bestLen = right - left + 1;
          bestLeft = left;
        }

        const leftChar = s[left];
        window.set(leftChar, (window.get(leftChar) ?? 0) - 1);
        if (need.has(leftChar) && (window.get(leftChar) ?? 0) < (need.get(leftChar) ?? 0)) {
          have--;
        }
        left++;
      }
    }

    return bestLen === Number.POSITIVE_INFINITY ? "" : s.slice(bestLeft, bestLeft + bestLen);
  }
}
