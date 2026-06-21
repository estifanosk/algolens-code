# AlgoLens Code

Local practice scaffold for the problems listed in `~/projects/algolens`.

Completed patterns:

- `sliding-window`
- `greedy`
- `two-pointers`

## Java

Requires Java 17 and Maven.

```bash
cd java
mvn test
mvn exec:java -Dexec.mainClass=algolens.slidingwindow.SlidingWindowMain
mvn exec:java -Dexec.mainClass=algolens.greedy.GreedyMain
mvn exec:java -Dexec.mainClass=algolens.twopointers.TwoPointersMain
```

Runnable implementations live in `java/src/main/java/algolens`.

JUnit tests live in `java/src/test/java/algolens`.

## Python

Requires Python 3.10+.

```bash
cd python
python -m venv .venv
source .venv/bin/activate
pip install -e ".[test]"
pytest
python -m sliding_window
python -m greedy
python -m two_pointers
```

Runnable implementations live in `python/sliding_window`, `python/greedy`, and `python/two_pointers`.

Pytest tests live in `python/tests`.

Completed reference implementations live in `python/solutions/sliding_window`.

## TypeScript

Requires Node.js 20+.

```bash
cd typescript
npm install
npm run typecheck
npm test
```

Runnable implementations live in `typescript/src`.

The main test runner is `typescript/src/main.ts`.

## JavaScript

Requires Node.js 20+.

```bash
cd javascript
npm test
```

JavaScript problem files live under pattern folders in `javascript/src`, for example:

- `javascript/src/sliding-window`
- `javascript/src/two-pointers`
- `javascript/src/greedy`

The main test runner is `javascript/src/main.js`.

The generated registry is `javascript/src/registry.js`.

`javascript/src/catalog.js` is generated from the 180-problem AlgoLens catalog:

```bash
npx tsx scripts/generate-javascript-catalog.ts
```

Current JavaScript status: all 180 problems have a file under their pattern folder. 30 problems have handwritten JavaScript handlers matching the completed Java/Python/TypeScript patterns; the remaining problem files are catalog-backed placeholders so the main runner still covers every listed example.
