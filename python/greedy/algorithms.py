from __future__ import annotations

from collections import Counter
from typing import List


class Solution:
    def findContentChildrenBruteForce(self, g: List[int], s: List[int]) -> int:
        used = [False] * len(s)

        def dfs(child: int) -> int:
            if child == len(g):
                return 0
            best = dfs(child + 1)
            for i, cookie in enumerate(s):
                if not used[i] and cookie >= g[child]:
                    used[i] = True
                    best = max(best, 1 + dfs(child + 1))
                    used[i] = False
            return best

        return dfs(0)

    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        child = 0
        for cookie in s:
            if child < len(g) and cookie >= g[child]:
                child += 1
        return child

    def lemonadeChangeBruteForce(self, bills: List[int]) -> bool:
        def dfs(i: int, fives: int, tens: int) -> bool:
            if i == len(bills):
                return True
            if bills[i] == 5:
                return dfs(i + 1, fives + 1, tens)
            if bills[i] == 10:
                return fives > 0 and dfs(i + 1, fives - 1, tens + 1)
            return (
                tens > 0 and fives > 0 and dfs(i + 1, fives - 1, tens - 1)
            ) or (fives >= 3 and dfs(i + 1, fives - 3, tens))

        return dfs(0, 0, 0)

    def lemonadeChange(self, bills: List[int]) -> bool:
        fives = tens = 0
        for bill in bills:
            if bill == 5:
                fives += 1
            elif bill == 10:
                if fives == 0:
                    return False
                fives -= 1
                tens += 1
            elif tens > 0 and fives > 0:
                tens -= 1
                fives -= 1
            elif fives >= 3:
                fives -= 3
            else:
                return False
        return True

    def jumpBruteForce(self, nums: List[int]) -> int:
        def dfs(i: int) -> int:
            if i >= len(nums) - 1:
                return 0
            if nums[i] == 0:
                return float("inf")
            return 1 + min(dfs(i + step) for step in range(1, nums[i] + 1))

        return dfs(0)

    def jump(self, nums: List[int]) -> int:
        jumps = end = farthest = 0
        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == end:
                jumps += 1
                end = farthest
        return jumps

    def canCompleteCircuitBruteForce(self, gas: List[int], cost: List[int]) -> int:
        for start in range(len(gas)):
            tank = 0
            works = True
            for offset in range(len(gas)):
                i = (start + offset) % len(gas)
                tank += gas[i] - cost[i]
                if tank < 0:
                    works = False
                    break
            if works:
                return start
        return -1

    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total = tank = start = 0
        for i, (g, c) in enumerate(zip(gas, cost)):
            diff = g - c
            total += diff
            tank += diff
            if tank < 0:
                start = i + 1
                tank = 0
        return start if total >= 0 else -1

    def canPlaceFlowersBruteForce(self, flowerbed: List[int], n: int) -> bool:
        bed = flowerbed[:]

        def can_plant(i: int) -> bool:
            return bed[i] == 0 and (i == 0 or bed[i - 1] == 0) and (i == len(bed) - 1 or bed[i + 1] == 0)

        def dfs(i: int, remaining: int) -> bool:
            if remaining <= 0:
                return True
            if i == len(bed):
                return False
            if can_plant(i):
                bed[i] = 1
                if dfs(i + 1, remaining - 1):
                    return True
                bed[i] = 0
            return dfs(i + 1, remaining)

        return dfs(0, n)

    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        bed = flowerbed[:]
        for i in range(len(bed)):
            if n == 0:
                return True
            if bed[i] == 0 and (i == 0 or bed[i - 1] == 0) and (i == len(bed) - 1 or bed[i + 1] == 0):
                bed[i] = 1
                n -= 1
        return n == 0

    def reconstructQueueBruteForce(self, people: List[List[int]]) -> List[List[int]]:
        used = [False] * len(people)
        path: List[List[int]] = []

        def valid() -> bool:
            for i, person in enumerate(path):
                if sum(1 for j in range(i) if path[j][0] >= person[0]) != person[1]:
                    return False
            return True

        def dfs() -> List[List[int]] | None:
            if len(path) == len(people):
                return [p[:] for p in path] if valid() else None
            for i, person in enumerate(people):
                if not used[i]:
                    used[i] = True
                    path.append(person)
                    answer = dfs()
                    if answer is not None:
                        return answer
                    path.pop()
                    used[i] = False
            return None

        return dfs() or []

    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        queue: List[List[int]] = []
        for person in sorted(people, key=lambda item: (-item[0], item[1])):
            queue.insert(person[1], person)
        return queue

    def partitionLabelsBruteForce(self, s: str) -> List[int]:
        def valid(start: int, end: int) -> bool:
            return all(s[i] not in s[end + 1 :] for i in range(start, end + 1))

        def dfs(start: int) -> List[int] | None:
            if start == len(s):
                return []
            for end in range(start, len(s)):
                if valid(start, end):
                    rest = dfs(end + 1)
                    if rest is not None:
                        return [end - start + 1] + rest
            return None

        return dfs(0) or []

    def partitionLabels(self, s: str) -> List[int]:
        last = {char: i for i, char in enumerate(s)}
        answer = []
        start = end = 0
        for i, char in enumerate(s):
            end = max(end, last[char])
            if i == end:
                answer.append(end - start + 1)
                start = i + 1
        return answer

    def checkValidStringBruteForce(self, s: str) -> bool:
        def dfs(i: int, open_count: int) -> bool:
            if open_count < 0:
                return False
            if i == len(s):
                return open_count == 0
            if s[i] == "(":
                return dfs(i + 1, open_count + 1)
            if s[i] == ")":
                return dfs(i + 1, open_count - 1)
            return dfs(i + 1, open_count + 1) or dfs(i + 1, open_count - 1) or dfs(i + 1, open_count)

        return dfs(0, 0)

    def checkValidString(self, s: str) -> bool:
        low = high = 0
        for char in s:
            if char == "(":
                low += 1
                high += 1
            elif char == ")":
                low = max(0, low - 1)
                high -= 1
            else:
                low = max(0, low - 1)
                high += 1
            if high < 0:
                return False
        return low == 0

    def isNStraightHandBruteForce(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        counts = Counter(hand)

        def dfs(remaining: int) -> bool:
            if remaining == 0:
                return True
            for start in list(counts):
                if counts[start] == 0:
                    continue
                group = list(range(start, start + groupSize))
                if all(counts[card] > 0 for card in group):
                    for card in group:
                        counts[card] -= 1
                    if dfs(remaining - groupSize):
                        return True
                    for card in group:
                        counts[card] += 1
            return False

        return dfs(len(hand))

    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        counts = Counter(hand)
        for start in sorted(counts):
            while counts[start] > 0:
                for card in range(start, start + groupSize):
                    if counts[card] == 0:
                        return False
                    counts[card] -= 1
        return True

    def minAddToMakeValidBruteForce(self, s: str) -> int:
        def possible(i: int, open_count: int, adds_left: int) -> bool:
            if open_count < 0 or adds_left < 0:
                return False
            if i == len(s):
                return open_count <= adds_left
            consume = possible(i + 1, open_count + 1, adds_left) if s[i] == "(" else possible(i + 1, open_count - 1, adds_left)
            return consume or possible(i, open_count + 1, adds_left - 1) or (
                open_count > 0 and possible(i, open_count - 1, adds_left - 1)
            )

        for additions in range(len(s) + 1):
            if possible(0, 0, additions):
                return additions
        return len(s)

    def minAddToMakeValid(self, s: str) -> int:
        open_count = additions = 0
        for char in s:
            if char == "(":
                open_count += 1
            elif open_count > 0:
                open_count -= 1
            else:
                additions += 1
        return additions + open_count
