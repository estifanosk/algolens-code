export class GreedyAlgorithms {
  findContentChildrenBruteForce(g: number[], s: number[]): number {
    const used = Array(s.length).fill(false);
    const dfs = (child: number): number => {
      if (child === g.length) return 0;
      let best = dfs(child + 1);
      for (let i = 0; i < s.length; i++) {
        if (!used[i] && s[i] >= g[child]) {
          used[i] = true;
          best = Math.max(best, 1 + dfs(child + 1));
          used[i] = false;
        }
      }
      return best;
    };
    return dfs(0);
  }

  findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let child = 0;
    for (const cookie of s) {
      if (child < g.length && cookie >= g[child]) child++;
    }
    return child;
  }

  lemonadeChangeBruteForce(bills: number[]): boolean {
    const dfs = (i: number, fives: number, tens: number): boolean => {
      if (i === bills.length) return true;
      if (bills[i] === 5) return dfs(i + 1, fives + 1, tens);
      if (bills[i] === 10) return fives > 0 && dfs(i + 1, fives - 1, tens + 1);
      return (tens > 0 && fives > 0 && dfs(i + 1, fives - 1, tens - 1))
        || (fives >= 3 && dfs(i + 1, fives - 3, tens));
    };
    return dfs(0, 0, 0);
  }

  lemonadeChange(bills: number[]): boolean {
    let fives = 0;
    let tens = 0;
    for (const bill of bills) {
      if (bill === 5) {
        fives++;
      } else if (bill === 10) {
        if (fives === 0) return false;
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

  jumpBruteForce(nums: number[]): number {
    const dfs = (i: number): number => {
      if (i >= nums.length - 1) return 0;
      let best = Number.POSITIVE_INFINITY;
      for (let step = 1; step <= nums[i]; step++) {
        best = Math.min(best, 1 + dfs(i + step));
      }
      return best;
    };
    return dfs(0);
  }

  jump(nums: number[]): number {
    let jumps = 0;
    let end = 0;
    let farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
      if (i === end) {
        jumps++;
        end = farthest;
      }
    }
    return jumps;
  }

  canCompleteCircuitBruteForce(gas: number[], cost: number[]): number {
    for (let start = 0; start < gas.length; start++) {
      let tank = 0;
      let works = true;
      for (let offset = 0; offset < gas.length; offset++) {
        const i = (start + offset) % gas.length;
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

  canCompleteCircuit(gas: number[], cost: number[]): number {
    let total = 0;
    let tank = 0;
    let start = 0;
    for (let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i];
      total += diff;
      tank += diff;
      if (tank < 0) {
        start = i + 1;
        tank = 0;
      }
    }
    return total >= 0 ? start : -1;
  }

  canPlaceFlowersBruteForce(flowerbed: number[], n: number): boolean {
    const bed = [...flowerbed];
    const canPlant = (i: number) => bed[i] === 0 && (i === 0 || bed[i - 1] === 0) && (i === bed.length - 1 || bed[i + 1] === 0);
    const dfs = (i: number, remaining: number): boolean => {
      if (remaining <= 0) return true;
      if (i === bed.length) return false;
      if (canPlant(i)) {
        bed[i] = 1;
        if (dfs(i + 1, remaining - 1)) return true;
        bed[i] = 0;
      }
      return dfs(i + 1, remaining);
    };
    return dfs(0, n);
  }

  canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const bed = [...flowerbed];
    for (let i = 0; i < bed.length && n > 0; i++) {
      if (bed[i] === 0 && (i === 0 || bed[i - 1] === 0) && (i === bed.length - 1 || bed[i + 1] === 0)) {
        bed[i] = 1;
        n--;
      }
    }
    return n === 0;
  }

  reconstructQueueBruteForce(people: number[][]): number[][] {
    const used = Array(people.length).fill(false);
    const path: number[][] = [];
    const valid = () => path.every((person, i) => path.slice(0, i).filter((earlier) => earlier[0] >= person[0]).length === person[1]);
    const dfs = (): number[][] | undefined => {
      if (path.length === people.length) return valid() ? path.map((person) => [...person]) : undefined;
      for (let i = 0; i < people.length; i++) {
        if (!used[i]) {
          used[i] = true;
          path.push(people[i]);
          const answer = dfs();
          if (answer) return answer;
          path.pop();
          used[i] = false;
        }
      }
      return undefined;
    };
    return dfs() ?? [];
  }

  reconstructQueue(people: number[][]): number[][] {
    const queue: number[][] = [];
    for (const person of [...people].sort((a, b) => b[0] - a[0] || a[1] - b[1])) {
      queue.splice(person[1], 0, person);
    }
    return queue;
  }

  partitionLabelsBruteForce(s: string): number[] {
    const valid = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        if (s.slice(end + 1).includes(s[i])) return false;
      }
      return true;
    };
    const dfs = (start: number): number[] | undefined => {
      if (start === s.length) return [];
      for (let end = start; end < s.length; end++) {
        if (valid(start, end)) {
          const rest = dfs(end + 1);
          if (rest) return [end - start + 1, ...rest];
        }
      }
      return undefined;
    };
    return dfs(0) ?? [];
  }

  partitionLabels(s: string): number[] {
    const last = new Map<string, number>();
    [...s].forEach((char, i) => last.set(char, i));
    const answer: number[] = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
      end = Math.max(end, last.get(s[i]) ?? i);
      if (i === end) {
        answer.push(end - start + 1);
        start = i + 1;
      }
    }
    return answer;
  }

  checkValidStringBruteForce(s: string): boolean {
    const dfs = (i: number, open: number): boolean => {
      if (open < 0) return false;
      if (i === s.length) return open === 0;
      if (s[i] === "(") return dfs(i + 1, open + 1);
      if (s[i] === ")") return dfs(i + 1, open - 1);
      return dfs(i + 1, open + 1) || dfs(i + 1, open - 1) || dfs(i + 1, open);
    };
    return dfs(0, 0);
  }

  checkValidString(s: string): boolean {
    let low = 0;
    let high = 0;
    for (const char of s) {
      if (char === "(") {
        low++;
        high++;
      } else if (char === ")") {
        low = Math.max(0, low - 1);
        high--;
      } else {
        low = Math.max(0, low - 1);
        high++;
      }
      if (high < 0) return false;
    }
    return low === 0;
  }

  isNStraightHandBruteForce(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;
    const counts = new Map<number, number>();
    for (const card of hand) counts.set(card, (counts.get(card) ?? 0) + 1);
    const dfs = (remaining: number): boolean => {
      if (remaining === 0) return true;
      for (const start of [...counts.keys()]) {
        if ((counts.get(start) ?? 0) === 0) continue;
        const group = Array.from({ length: groupSize }, (_, i) => start + i);
        if (group.every((card) => (counts.get(card) ?? 0) > 0)) {
          group.forEach((card) => counts.set(card, (counts.get(card) ?? 0) - 1));
          if (dfs(remaining - groupSize)) return true;
          group.forEach((card) => counts.set(card, (counts.get(card) ?? 0) + 1));
        }
      }
      return false;
    };
    return dfs(hand.length);
  }

  isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;
    const counts = new Map<number, number>();
    for (const card of hand) counts.set(card, (counts.get(card) ?? 0) + 1);
    for (const start of [...counts.keys()].sort((a, b) => a - b)) {
      while ((counts.get(start) ?? 0) > 0) {
        for (let card = start; card < start + groupSize; card++) {
          const count = counts.get(card) ?? 0;
          if (count === 0) return false;
          counts.set(card, count - 1);
        }
      }
    }
    return true;
  }

  minAddToMakeValidBruteForce(s: string): number {
    const possible = (i: number, open: number, addsLeft: number): boolean => {
      if (open < 0 || addsLeft < 0) return false;
      if (i === s.length) return open <= addsLeft;
      const consume = s[i] === "(" ? possible(i + 1, open + 1, addsLeft) : possible(i + 1, open - 1, addsLeft);
      return consume || possible(i, open + 1, addsLeft - 1) || (open > 0 && possible(i, open - 1, addsLeft - 1));
    };
    for (let additions = 0; additions <= s.length; additions++) {
      if (possible(0, 0, additions)) return additions;
    }
    return s.length;
  }

  minAddToMakeValid(s: string): number {
    let open = 0;
    let additions = 0;
    for (const char of s) {
      if (char === "(") open++;
      else if (open > 0) open--;
      else additions++;
    }
    return additions + open;
  }
}
