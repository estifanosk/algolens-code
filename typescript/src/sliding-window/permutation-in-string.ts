export class PermutationInString {
  checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const need = new Array<number>(26).fill(0);
    const window = new Array<number>(26).fill(0);
    for (const char of s1) {
      need[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (let right = 0; right < s2.length; right++) {
      window[s2.charCodeAt(right) - "a".charCodeAt(0)]++;
      if (right >= s1.length) {
        window[s2.charCodeAt(right - s1.length) - "a".charCodeAt(0)]--;
      }
      if (sameCounts(need, window)) return true;
    }

    return false;
  }
}

function sameCounts(a: number[], b: number[]): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
