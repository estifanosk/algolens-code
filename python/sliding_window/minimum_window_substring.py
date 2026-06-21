from collections import Counter, defaultdict

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s):
            return ""

        need = Counter(t)
        window = defaultdict(int)
        have = 0
        required = len(need)
        best = (float("inf"), 0)
        left = 0

        for right, char in enumerate(s):
            window[char] += 1
            if char in need and window[char] == need[char]:
                have += 1

            while have == required:
                if right - left + 1 < best[0]:
                    best = (right - left + 1, left)
                left_char = s[left]
                window[left_char] -= 1
                if left_char in need and window[left_char] < need[left_char]:
                    have -= 1
                left += 1

        length, start = best
        return "" if length == float("inf") else s[start:start + length]
