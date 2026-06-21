# Two Pointers

Use two pointers when a problem can be solved by moving two indexes through an array or string instead of revisiting the same pairs or positions.

## Pattern

1. Place pointers at meaningful starting positions, often both ends or a read/write pair.
2. Move one or both pointers based on the current comparison or invariant.
3. Update the answer or mutate the array in place as the pointers advance.

Common signals:

- The input is sorted, or sorting is allowed before scanning.
- The prompt asks for a pair, triplet, palindrome check, in-place rewrite, or maximum area over two endpoints.
- A brute-force solution checks many pairs or shifts values repeatedly.
- The optimized solution can discard a full side of the search after each comparison.

## Problems

- `two-sum-ii`
- `valid-palindrome`
- `container-with-most-water`
- `three-sum`
- `remove-duplicates-sorted`
- `move-zeroes`
- `trapping-rain-water`
- `sort-colors`
- `squares-sorted-array`
- `reverse-string`

## Implementations

Runnable implementations:

- Java: `java/src/main/java/algolens/twopointers`
- Python: `python/two_pointers`
- TypeScript: `typescript/src/two-pointers`

## Run

Java:

```bash
cd java
mvn test
mvn exec:java -Dexec.mainClass=algolens.twopointers.TwoPointersMain
```

Python:

```bash
cd python
pytest
python -m two_pointers
```

TypeScript:

```bash
cd typescript
npm run typecheck
npm test
```
