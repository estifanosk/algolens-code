export class FruitIntoBaskets {
  totalFruit(fruits: number[]): number {
    const counts = new Map<number, number>();
    let left = 0;
    let best = 0;

    for (let right = 0; right < fruits.length; right++) {
      counts.set(fruits[right], (counts.get(fruits[right]) ?? 0) + 1);

      while (counts.size > 2) {
        const fruit = fruits[left];
        const nextCount = (counts.get(fruit) ?? 0) - 1;
        if (nextCount === 0) {
          counts.delete(fruit);
        } else {
          counts.set(fruit, nextCount);
        }
        left++;
      }

      best = Math.max(best, right - left + 1);
    }

    return best;
  }
}
