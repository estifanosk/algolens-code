export class BestTimeToBuyStock {
  maxProfit(prices: number[]): number {
    let minPrice = Number.POSITIVE_INFINITY;
    let best = 0;

    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
      best = Math.max(best, price - minPrice);
    }

    return best;
  }
}
