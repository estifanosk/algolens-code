package algolens.greedy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class GreedyAlgorithms {
    public int findContentChildrenBruteForce(int[] g, int[] s) {
        return assignCookiesDfs(g, s, 0, new boolean[s.length]);
    }

    private int assignCookiesDfs(int[] g, int[] s, int child, boolean[] used) {
        if (child == g.length) return 0;
        int best = assignCookiesDfs(g, s, child + 1, used);
        for (int i = 0; i < s.length; i++) {
            if (!used[i] && s[i] >= g[child]) {
                used[i] = true;
                best = Math.max(best, 1 + assignCookiesDfs(g, s, child + 1, used));
                used[i] = false;
            }
        }
        return best;
    }

    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int child = 0;
        for (int cookie : s) {
            if (child < g.length && cookie >= g[child]) child++;
        }
        return child;
    }

    public boolean lemonadeChangeBruteForce(int[] bills) {
        return lemonadeDfs(bills, 0, 0, 0);
    }

    private boolean lemonadeDfs(int[] bills, int i, int fives, int tens) {
        if (i == bills.length) return true;
        if (bills[i] == 5) return lemonadeDfs(bills, i + 1, fives + 1, tens);
        if (bills[i] == 10) return fives > 0 && lemonadeDfs(bills, i + 1, fives - 1, tens + 1);
        return (tens > 0 && fives > 0 && lemonadeDfs(bills, i + 1, fives - 1, tens - 1))
            || (fives >= 3 && lemonadeDfs(bills, i + 1, fives - 3, tens));
    }

    public boolean lemonadeChange(int[] bills) {
        int fives = 0;
        int tens = 0;
        for (int bill : bills) {
            if (bill == 5) {
                fives++;
            } else if (bill == 10) {
                if (fives == 0) return false;
                fives--;
                tens++;
            } else if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
        return true;
    }

    public int jumpBruteForce(int[] nums) {
        return jumpDfs(nums, 0);
    }

    private int jumpDfs(int[] nums, int index) {
        if (index >= nums.length - 1) return 0;
        int best = Integer.MAX_VALUE / 4;
        for (int step = 1; step <= nums[index]; step++) {
            best = Math.min(best, 1 + jumpDfs(nums, index + step));
        }
        return best;
    }

    public int jump(int[] nums) {
        int jumps = 0;
        int end = 0;
        int farthest = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);
            if (i == end) {
                jumps++;
                end = farthest;
            }
        }
        return jumps;
    }

    public int canCompleteCircuitBruteForce(int[] gas, int[] cost) {
        for (int start = 0; start < gas.length; start++) {
            int tank = 0;
            boolean works = true;
            for (int offset = 0; offset < gas.length; offset++) {
                int i = (start + offset) % gas.length;
                tank += gas[i] - cost[i];
                if (tank < 0) {
                    works = false;
                    break;
                }
            }
            if (works) return start;
        }
        return -1;
    }

    public int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0;
        int tank = 0;
        int start = 0;
        for (int i = 0; i < gas.length; i++) {
            int diff = gas[i] - cost[i];
            total += diff;
            tank += diff;
            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }
        return total >= 0 ? start : -1;
    }

    public boolean canPlaceFlowersBruteForce(int[] flowerbed, int n) {
        return flowersDfs(flowerbed.clone(), n, 0);
    }

    private boolean flowersDfs(int[] bed, int remaining, int index) {
        if (remaining <= 0) return true;
        if (index == bed.length) return false;
        if (canPlantAt(bed, index)) {
            bed[index] = 1;
            if (flowersDfs(bed, remaining - 1, index + 1)) return true;
            bed[index] = 0;
        }
        return flowersDfs(bed, remaining, index + 1);
    }

    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int[] bed = flowerbed.clone();
        for (int i = 0; i < bed.length && n > 0; i++) {
            if (canPlantAt(bed, i)) {
                bed[i] = 1;
                n--;
            }
        }
        return n == 0;
    }

    private boolean canPlantAt(int[] bed, int i) {
        return bed[i] == 0 && (i == 0 || bed[i - 1] == 0) && (i == bed.length - 1 || bed[i + 1] == 0);
    }

    public int[][] reconstructQueueBruteForce(int[][] people) {
        int[][] copy = copy2d(people);
        boolean[] used = new boolean[copy.length];
        List<int[]> path = new ArrayList<>();
        int[][] answer = reconstructDfs(copy, used, path);
        return answer == null ? new int[0][0] : answer;
    }

    private int[][] reconstructDfs(int[][] people, boolean[] used, List<int[]> path) {
        if (path.size() == people.length) return validQueue(path) ? path.toArray(new int[0][]) : null;
        for (int i = 0; i < people.length; i++) {
            if (!used[i]) {
                used[i] = true;
                path.add(people[i]);
                int[][] answer = reconstructDfs(people, used, path);
                if (answer != null) return answer;
                path.remove(path.size() - 1);
                used[i] = false;
            }
        }
        return null;
    }

    private boolean validQueue(List<int[]> queue) {
        for (int i = 0; i < queue.size(); i++) {
            int count = 0;
            for (int j = 0; j < i; j++) {
                if (queue.get(j)[0] >= queue.get(i)[0]) count++;
            }
            if (count != queue.get(i)[1]) return false;
        }
        return true;
    }

    public int[][] reconstructQueue(int[][] people) {
        int[][] sorted = copy2d(people);
        Arrays.sort(sorted, (a, b) -> a[0] == b[0] ? Integer.compare(a[1], b[1]) : Integer.compare(b[0], a[0]));
        List<int[]> queue = new ArrayList<>();
        for (int[] person : sorted) queue.add(person[1], person);
        return queue.toArray(new int[0][]);
    }

    public List<Integer> partitionLabelsBruteForce(String s) {
        return partitionDfs(s, 0);
    }

    private List<Integer> partitionDfs(String s, int start) {
        if (start == s.length()) return new ArrayList<>();
        for (int end = start; end < s.length(); end++) {
            if (validPartitionPrefix(s, start, end)) {
                List<Integer> rest = partitionDfs(s, end + 1);
                if (rest != null) {
                    rest.add(0, end - start + 1);
                    return rest;
                }
            }
        }
        return null;
    }

    private boolean validPartitionPrefix(String s, int start, int end) {
        for (int i = start; i <= end; i++) {
            char c = s.charAt(i);
            for (int j = end + 1; j < s.length(); j++) {
                if (s.charAt(j) == c) return false;
            }
        }
        return true;
    }

    public List<Integer> partitionLabels(String s) {
        int[] last = new int[26];
        for (int i = 0; i < s.length(); i++) last[s.charAt(i) - 'a'] = i;
        List<Integer> answer = new ArrayList<>();
        int start = 0;
        int end = 0;
        for (int i = 0; i < s.length(); i++) {
            end = Math.max(end, last[s.charAt(i) - 'a']);
            if (i == end) {
                answer.add(end - start + 1);
                start = i + 1;
            }
        }
        return answer;
    }

    public boolean checkValidStringBruteForce(String s) {
        return validParenDfs(s, 0, 0);
    }

    private boolean validParenDfs(String s, int i, int open) {
        if (open < 0) return false;
        if (i == s.length()) return open == 0;
        char c = s.charAt(i);
        if (c == '(') return validParenDfs(s, i + 1, open + 1);
        if (c == ')') return validParenDfs(s, i + 1, open - 1);
        return validParenDfs(s, i + 1, open + 1)
            || validParenDfs(s, i + 1, open - 1)
            || validParenDfs(s, i + 1, open);
    }

    public boolean checkValidString(String s) {
        int low = 0;
        int high = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                low++;
                high++;
            } else if (c == ')') {
                low = Math.max(0, low - 1);
                high--;
            } else {
                low = Math.max(0, low - 1);
                high++;
            }
            if (high < 0) return false;
        }
        return low == 0;
    }

    public boolean isNStraightHandBruteForce(int[] hand, int groupSize) {
        if (hand.length % groupSize != 0) return false;
        Map<Integer, Integer> counts = new HashMap<>();
        for (int card : hand) counts.put(card, counts.getOrDefault(card, 0) + 1);
        return straightHandDfs(counts, hand.length, groupSize);
    }

    private boolean straightHandDfs(Map<Integer, Integer> counts, int remaining, int groupSize) {
        if (remaining == 0) return true;
        for (int start : new ArrayList<>(counts.keySet())) {
            if (counts.getOrDefault(start, 0) == 0) continue;
            if (takeGroup(counts, start, groupSize, -1)) {
                if (straightHandDfs(counts, remaining - groupSize, groupSize)) return true;
                takeGroup(counts, start, groupSize, 1);
            }
        }
        return false;
    }

    public boolean isNStraightHand(int[] hand, int groupSize) {
        if (hand.length % groupSize != 0) return false;
        TreeMap<Integer, Integer> counts = new TreeMap<>();
        for (int card : hand) counts.put(card, counts.getOrDefault(card, 0) + 1);
        while (!counts.isEmpty()) {
            int start = counts.firstKey();
            for (int card = start; card < start + groupSize; card++) {
                Integer count = counts.get(card);
                if (count == null) return false;
                if (count == 1) counts.remove(card);
                else counts.put(card, count - 1);
            }
        }
        return true;
    }

    private boolean takeGroup(Map<Integer, Integer> counts, int start, int groupSize, int delta) {
        if (delta < 0) {
            for (int card = start; card < start + groupSize; card++) {
                if (counts.getOrDefault(card, 0) == 0) return false;
            }
        }
        for (int card = start; card < start + groupSize; card++) {
            counts.put(card, counts.getOrDefault(card, 0) + delta);
        }
        return true;
    }

    public int minAddToMakeValidBruteForce(String s) {
        for (int adds = 0; adds <= s.length(); adds++) {
            if (canMakeValidWithAdds(s, 0, 0, adds)) return adds;
        }
        return s.length();
    }

    private boolean canMakeValidWithAdds(String s, int i, int open, int addsLeft) {
        if (open < 0 || addsLeft < 0) return false;
        if (i == s.length()) return open <= addsLeft;
        char c = s.charAt(i);
        boolean consume = c == '('
            ? canMakeValidWithAdds(s, i + 1, open + 1, addsLeft)
            : canMakeValidWithAdds(s, i + 1, open - 1, addsLeft);
        return consume
            || canMakeValidWithAdds(s, i, open + 1, addsLeft - 1)
            || (open > 0 && canMakeValidWithAdds(s, i, open - 1, addsLeft - 1));
    }

    public int minAddToMakeValid(String s) {
        int open = 0;
        int additions = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                open++;
            } else if (open > 0) {
                open--;
            } else {
                additions++;
            }
        }
        return additions + open;
    }

    private int[][] copy2d(int[][] values) {
        int[][] copy = new int[values.length][];
        for (int i = 0; i < values.length; i++) copy[i] = values[i].clone();
        return copy;
    }
}
