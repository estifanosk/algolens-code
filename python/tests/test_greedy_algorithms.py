from greedy.algorithms import Solution


solution = Solution()


def assert_queue_valid(queue):
    for i, person in enumerate(queue):
        assert sum(1 for earlier in queue[:i] if earlier[0] >= person[0]) == person[1]


def test_assign_cookies_examples():
    assert solution.findContentChildrenBruteForce([1, 2, 3], [1, 1]) == 1
    assert solution.findContentChildren([1, 2, 3], [1, 1]) == 1
    assert solution.findContentChildrenBruteForce([1, 2], [1, 2, 3]) == 2
    assert solution.findContentChildren([1, 2], [1, 2, 3]) == 2


def test_lemonade_change_examples():
    assert solution.lemonadeChangeBruteForce([5, 5, 5, 10, 20]) is True
    assert solution.lemonadeChange([5, 5, 5, 10, 20]) is True
    assert solution.lemonadeChangeBruteForce([5, 5, 10, 10, 20]) is False
    assert solution.lemonadeChange([5, 5, 10, 10, 20]) is False


def test_jump_game_two_examples():
    assert solution.jumpBruteForce([2, 3, 1, 1, 4]) == 2
    assert solution.jump([2, 3, 1, 1, 4]) == 2
    assert solution.jumpBruteForce([2, 3, 0, 1, 4]) == 2
    assert solution.jump([2, 3, 0, 1, 4]) == 2


def test_gas_station_examples():
    assert solution.canCompleteCircuitBruteForce([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) == 3
    assert solution.canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) == 3
    assert solution.canCompleteCircuitBruteForce([2, 3, 4], [3, 4, 3]) == -1
    assert solution.canCompleteCircuit([2, 3, 4], [3, 4, 3]) == -1


def test_can_place_flowers_examples():
    assert solution.canPlaceFlowersBruteForce([1, 0, 0, 0, 1], 1) is True
    assert solution.canPlaceFlowers([1, 0, 0, 0, 1], 1) is True
    assert solution.canPlaceFlowersBruteForce([1, 0, 0, 0, 1], 2) is False
    assert solution.canPlaceFlowers([1, 0, 0, 0, 1], 2) is False


def test_queue_reconstruction_example():
    people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
    assert_queue_valid(solution.reconstructQueueBruteForce(people))
    assert_queue_valid(solution.reconstructQueue(people))


def test_partition_labels_examples():
    assert solution.partitionLabelsBruteForce("ababcbacadefegdehijhklij") == [9, 7, 8]
    assert solution.partitionLabels("ababcbacadefegdehijhklij") == [9, 7, 8]
    assert solution.partitionLabelsBruteForce("eccbbbbdec") == [10]
    assert solution.partitionLabels("eccbbbbdec") == [10]


def test_valid_parenthesis_string_examples():
    assert solution.checkValidStringBruteForce("(*)") is True
    assert solution.checkValidString("(*)") is True
    assert solution.checkValidStringBruteForce("(*))") is True
    assert solution.checkValidString("(*))") is True


def test_hand_of_straights_examples():
    assert solution.isNStraightHandBruteForce([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) is True
    assert solution.isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) is True
    assert solution.isNStraightHandBruteForce([1, 2, 3, 4, 5], 4) is False
    assert solution.isNStraightHand([1, 2, 3, 4, 5], 4) is False


def test_minimum_add_examples():
    assert solution.minAddToMakeValidBruteForce("())") == 1
    assert solution.minAddToMakeValid("())") == 1
    assert solution.minAddToMakeValidBruteForce("(((") == 3
    assert solution.minAddToMakeValid("(((") == 3
