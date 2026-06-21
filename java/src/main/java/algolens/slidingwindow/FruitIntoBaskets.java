package algolens.slidingwindow;

import java.util.HashMap;
import java.util.Map;

public class FruitIntoBaskets {
    public int totalFruit(int[] fruits) {
        Map<Integer, Integer> counts = new HashMap<>();
        int l = 0, best = 0;
        for (int r = 0; r < fruits.length; r++) {
            counts.put(fruits[r], counts.getOrDefault(fruits[r], 0) + 1);
            while (counts.size() > 2) {
                counts.put(fruits[l], counts.get(fruits[l]) - 1);
                if (counts.get(fruits[l]) == 0) counts.remove(fruits[l]);
                l++;
            }
            best = Math.max(best, r - l + 1);
        }
        return best;
    }
}
