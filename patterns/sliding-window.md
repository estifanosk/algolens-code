# Sliding Window

Use a sliding window when a problem asks about a contiguous subarray or substring.

## Pattern

1. Expand the right side of the window.
2. Shrink the left side while the window is invalid.
3. Update the answer from the valid window.

Common signals:

- The input is an array or string.
- The result must come from a contiguous range.
- The prompt asks for a maximum, minimum, longest, shortest, or count over ranges.
- A fixed window size `k` appears.

## Problems

This folder currently covers the same sliding-window problems listed in `~/projects/algolens`:

- `max-consecutive-ones` - Max Consecutive Ones III
- `longest-substring-no-repeat` - Longest Substring Without Repeating Characters
- `best-time-to-buy-stock` - Best Time to Buy and Sell Stock
- `minimum-window-substring` - Minimum Window Substring
- `permutation-in-string` - Permutation in String
- `longest-repeating-char-replacement` - Longest Repeating Character Replacement
- `max-sum-subarray-k` - Maximum Average Subarray I
- `minimum-size-subarray-sum` - Minimum Size Subarray Sum
- `fruit-into-baskets` - Fruit Into Baskets
- `subarray-product-less-than-k` - Subarray Product Less Than K

## Implementations

Runnable implementations:

- Java: `java/src/main/java/algolens/slidingwindow`
- Python: `python/sliding_window`
- TypeScript: `typescript/src/sliding-window`

Reference copies for Python:

- Python: `python/solutions/sliding_window`

## Run

Java:

```bash
cd java
mvn test
mvn exec:java -Dexec.mainClass=algolens.slidingwindow.SlidingWindowMain
```

Python:

```bash
cd python
python -m venv .venv
source .venv/bin/activate
pip install -e ".[test]"
pytest
python -m sliding_window
```

TypeScript:

```bash
cd typescript
npm install
npm run typecheck
npm test
```
