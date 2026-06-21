from greedy.algorithms import Solution


def assert_equal(expected, actual, name):
    if expected != actual:
        raise AssertionError(f"{name} expected {expected!r} but got {actual!r}")


def assert_queue_valid(queue):
    for i, person in enumerate(queue):
        count = sum(1 for earlier in queue[:i] if earlier[0] >= person[0])
        assert_equal(person[1], count, "queue-reconstruction-height")


def main():
    solution = Solution()

    assert_equal(1, solution.findContentChildrenBruteForce([1, 2, 3], [1, 1]), "assign-cookies brute force")
    assert_equal(1, solution.findContentChildren([1, 2, 3], [1, 1]), "assign-cookies")
    assert_equal(True, solution.lemonadeChangeBruteForce([5, 5, 5, 10, 20]), "lemonade-change brute force")
    assert_equal(True, solution.lemonadeChange([5, 5, 5, 10, 20]), "lemonade-change")
    assert_equal(2, solution.jumpBruteForce([2, 3, 1, 1, 4]), "jump-game-ii brute force")
    assert_equal(2, solution.jump([2, 3, 1, 1, 4]), "jump-game-ii")
    assert_equal(3, solution.canCompleteCircuitBruteForce([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), "gas-station brute force")
    assert_equal(3, solution.canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), "gas-station")
    assert_equal(True, solution.canPlaceFlowersBruteForce([1, 0, 0, 0, 1], 1), "can-place-flowers brute force")
    assert_equal(True, solution.canPlaceFlowers([1, 0, 0, 0, 1], 1), "can-place-flowers")
    assert_queue_valid(solution.reconstructQueueBruteForce([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))
    assert_queue_valid(solution.reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))
    assert_equal([9, 7, 8], solution.partitionLabelsBruteForce("ababcbacadefegdehijhklij"), "partition-labels brute force")
    assert_equal([9, 7, 8], solution.partitionLabels("ababcbacadefegdehijhklij"), "partition-labels")
    assert_equal(True, solution.checkValidStringBruteForce("(*))"), "valid-parenthesis-string brute force")
    assert_equal(True, solution.checkValidString("(*))"), "valid-parenthesis-string")
    assert_equal(True, solution.isNStraightHandBruteForce([1, 2, 3, 6, 2, 3, 4, 7, 8], 3), "hand-of-straights brute force")
    assert_equal(True, solution.isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3), "hand-of-straights")
    assert_equal(1, solution.minAddToMakeValidBruteForce("())"), "minimum-add-parentheses brute force")
    assert_equal(1, solution.minAddToMakeValid("())"), "minimum-add-parentheses")

    print("All greedy Python checks passed.")


if __name__ == "__main__":
    main()
