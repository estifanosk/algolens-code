from collections import Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str):
        size = len(s1)
        if size > len(s2):
            return False

        need = Counter(s1)
        window = Counter()
        left = 0

        for right, char in enumerate(s2):
            window[char] += 1
            if right - left + 1 > size:
                left_char = s2[left]
                window[left_char] -= 1
                if window[left_char] == 0:
                    del window[left_char]
                left += 1
            if window == need:
                return True

        return False
