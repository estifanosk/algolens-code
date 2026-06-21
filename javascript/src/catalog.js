// Generated from ~/projects/algolens/lib/data/patterns.ts.
// Run: npx tsx scripts/generate-javascript-catalog.ts

export const problems = [
  {
    "id": "max-consecutive-ones",
    "title": "Max Consecutive Ones III",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
        "output": "6"
      },
      {
        "input": "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
        "output": "10"
      }
    ]
  },
  {
    "id": "longest-substring-no-repeat",
    "title": "Longest Substring Without Repeating Characters",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3"
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1"
      }
    ]
  },
  {
    "id": "best-time-to-buy-stock",
    "title": "Best Time to Buy and Sell Stock",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5"
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0"
      }
    ]
  },
  {
    "id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\""
      },
      {
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\""
      }
    ]
  },
  {
    "id": "permutation-in-string",
    "title": "Permutation in String",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "output": "true"
      },
      {
        "input": "s1 = \"ab\", s2 = \"eidboaoo\"",
        "output": "false"
      }
    ]
  },
  {
    "id": "longest-repeating-char-replacement",
    "title": "Longest Repeating Character Replacement",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "s = \"ABAB\", k = 2",
        "output": "4"
      },
      {
        "input": "s = \"AABABBA\", k = 1",
        "output": "4"
      }
    ]
  },
  {
    "id": "max-sum-subarray-k",
    "title": "Maximum Average Subarray I",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "nums = [1,12,-5,-6,50,3], k = 4",
        "output": "12.75000"
      },
      {
        "input": "nums = [5], k = 1",
        "output": "5.00000"
      }
    ]
  },
  {
    "id": "minimum-size-subarray-sum",
    "title": "Minimum Size Subarray Sum",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "target = 7, nums = [2,3,1,2,4,3]",
        "output": "2"
      },
      {
        "input": "target = 4, nums = [1,4,4]",
        "output": "1"
      }
    ]
  },
  {
    "id": "fruit-into-baskets",
    "title": "Fruit Into Baskets",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "fruits = [1,2,1]",
        "output": "3"
      },
      {
        "input": "fruits = [0,1,2,2]",
        "output": "3"
      }
    ]
  },
  {
    "id": "subarray-product-less-than-k",
    "title": "Subarray Product Less Than K",
    "patternId": "sliding-window",
    "examples": [
      {
        "input": "nums = [10,5,2,6], k = 100",
        "output": "8"
      },
      {
        "input": "nums = [1,2,3], k = 0",
        "output": "0"
      }
    ]
  },
  {
    "id": "two-sum-ii",
    "title": "Two Sum II",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "numbers = [2,7,11,15], target = 9",
        "output": "[1,2]"
      },
      {
        "input": "numbers = [2,3,4], target = 6",
        "output": "[1,3]"
      }
    ]
  },
  {
    "id": "valid-palindrome",
    "title": "Valid Palindrome",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true"
      },
      {
        "input": "s = \"race a car\"",
        "output": "false"
      }
    ]
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49"
      },
      {
        "input": "height = [1,1]",
        "output": "1"
      }
    ]
  },
  {
    "id": "three-sum",
    "title": "3Sum",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]"
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]"
      }
    ]
  },
  {
    "id": "remove-duplicates-sorted",
    "title": "Remove Duplicates from Sorted Array",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "nums = [1,1,2]",
        "output": "2, nums = [1,2,_]"
      },
      {
        "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
        "output": "5, nums = [0,1,2,3,4,_,_,_,_,_]"
      }
    ]
  },
  {
    "id": "move-zeroes",
    "title": "Move Zeroes",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]"
      },
      {
        "input": "nums = [0]",
        "output": "[0]"
      }
    ]
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6"
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9"
      }
    ]
  },
  {
    "id": "sort-colors",
    "title": "Sort Colors",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]"
      },
      {
        "input": "nums = [2,0,1]",
        "output": "[0,1,2]"
      }
    ]
  },
  {
    "id": "squares-sorted-array",
    "title": "Squares of a Sorted Array",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "nums = [-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]"
      },
      {
        "input": "nums = [-7,-3,2,3,11]",
        "output": "[4,9,9,49,121]"
      }
    ]
  },
  {
    "id": "reverse-string",
    "title": "Reverse String",
    "patternId": "two-pointers",
    "examples": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]"
      },
      {
        "input": "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]"
      }
    ]
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "grid": [
          [
            "1",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "1",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "1",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "0",
            "1",
            "1"
          ]
        ]
      },
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "grid": [
          [
            "1",
            "1",
            "1",
            "1",
            "0"
          ],
          [
            "1",
            "1",
            "0",
            "1",
            "0"
          ],
          [
            "1",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "0",
            "0",
            "0"
          ]
        ]
      }
    ]
  },
  {
    "id": "max-area-of-island",
    "title": "Max Area of Island",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0]]",
        "output": "4"
      },
      {
        "input": "grid = [[0,0,0,0,0,0,0,0]]",
        "output": "0"
      }
    ]
  },
  {
    "id": "rotting-oranges",
    "title": "Rotting Oranges",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4"
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1"
      }
    ]
  },
  {
    "id": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]"
      },
      {
        "input": "heights = [[1]]",
        "output": "[[0,0]]"
      }
    ]
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true"
      },
      {
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "output": "false"
      }
    ]
  },
  {
    "id": "word-ladder",
    "title": "Word Ladder",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5"
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0"
      }
    ]
  },
  {
    "id": "clone-graph",
    "title": "Clone Graph",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]"
      },
      {
        "input": "adjList = [[]]",
        "output": "[[]]"
      }
    ]
  },
  {
    "id": "surrounded-regions",
    "title": "Surrounded Regions",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]"
      },
      {
        "input": "board = [[\"X\"]]",
        "output": "[[\"X\"]]"
      }
    ]
  },
  {
    "id": "walls-and-gates",
    "title": "Walls and Gates",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
        "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]"
      },
      {
        "input": "rooms = [[-1]]",
        "output": "[[-1]]"
      }
    ]
  },
  {
    "id": "redundant-connection",
    "title": "Redundant Connection",
    "patternId": "bfs-dfs",
    "examples": [
      {
        "input": "edges = [[1,2],[1,3],[2,3]]",
        "output": "[2,3]"
      },
      {
        "input": "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
        "output": "[1,4]"
      }
    ]
  },
  {
    "id": "search-rotated-array",
    "title": "Search in Rotated Sorted Array",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1"
      }
    ]
  },
  {
    "id": "find-min-rotated-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "0"
      }
    ]
  },
  {
    "id": "first-bad-version",
    "title": "First Bad Version",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "n = 5, bad = 4",
        "output": "4"
      },
      {
        "input": "n = 1, bad = 1",
        "output": "1"
      }
    ]
  },
  {
    "id": "search-2d-matrix",
    "title": "Search a 2D Matrix",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true"
      },
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "false"
      }
    ]
  },
  {
    "id": "find-peak-element",
    "title": "Find Peak Element",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "2"
      },
      {
        "input": "nums = [1,2,1,3,5,6,4]",
        "output": "5"
      }
    ]
  },
  {
    "id": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4"
      },
      {
        "input": "piles = [30,11,23,4,20], h = 5",
        "output": "30"
      }
    ]
  },
  {
    "id": "capacity-ship-packages",
    "title": "Capacity To Ship Packages Within D Days",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
        "output": "15"
      },
      {
        "input": "weights = [3,2,2,4,1,4], days = 3",
        "output": "6"
      }
    ]
  },
  {
    "id": "sqrtx",
    "title": "Sqrt(x)",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "x = 4",
        "output": "2"
      },
      {
        "input": "x = 8",
        "output": "2"
      }
    ]
  },
  {
    "id": "guess-number-higher-lower",
    "title": "Guess Number Higher or Lower",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "n = 10, pick = 6",
        "output": "6"
      },
      {
        "input": "n = 1, pick = 1",
        "output": "1"
      }
    ]
  },
  {
    "id": "time-based-key-value",
    "title": "Time Based Key-Value Store",
    "patternId": "binary-search",
    "examples": [
      {
        "input": "[\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"] [[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]",
        "output": "[null,null,\"bar\",\"bar\",null,\"bar2\",\"bar2\"]"
      }
    ]
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "n = 2",
        "output": "2"
      },
      {
        "input": "n = 3",
        "output": "3"
      }
    ]
  },
  {
    "id": "house-robber",
    "title": "House Robber",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4"
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12"
      }
    ]
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "coins = [1,5,10,25], amount = 36",
        "output": "3"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1"
      }
    ]
  },
  {
    "id": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3"
      },
      {
        "input": "text1 = \"abc\", text2 = \"abc\"",
        "output": "3"
      }
    ]
  },
  {
    "id": "unique-paths",
    "title": "Unique Paths",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "m = 3, n = 7",
        "output": "28"
      },
      {
        "input": "m = 3, n = 2",
        "output": "3"
      }
    ]
  },
  {
    "id": "jump-game",
    "title": "Jump Game",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true"
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false"
      }
    ]
  },
  {
    "id": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4"
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4"
      }
    ]
  },
  {
    "id": "word-break",
    "title": "Word Break",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true"
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
        "output": "true"
      }
    ]
  },
  {
    "id": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6"
      },
      {
        "input": "nums = [-2,0,-1]",
        "output": "0"
      }
    ]
  },
  {
    "id": "decode-ways",
    "title": "Decode Ways",
    "patternId": "dynamic-programming",
    "examples": [
      {
        "input": "s = \"12\"",
        "output": "2"
      },
      {
        "input": "s = \"226\"",
        "output": "3"
      }
    ]
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]"
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]"
      }
    ]
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "output": "[[1,5],[6,9]]"
      },
      {
        "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        "output": "[[1,2],[3,10],[12,16]]"
      }
    ]
  },
  {
    "id": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        "output": "1"
      },
      {
        "input": "intervals = [[1,2],[1,2],[1,2]]",
        "output": "2"
      }
    ]
  },
  {
    "id": "meeting-rooms",
    "title": "Meeting Rooms",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "false"
      },
      {
        "input": "intervals = [[7,10],[2,4]]",
        "output": "true"
      }
    ]
  },
  {
    "id": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "2"
      },
      {
        "input": "intervals = [[7,10],[2,4]]",
        "output": "1"
      }
    ]
  },
  {
    "id": "minimum-arrows-balloons",
    "title": "Minimum Number of Arrows to Burst Balloons",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "points = [[10,16],[2,8],[1,6],[7,12]]",
        "output": "2"
      },
      {
        "input": "points = [[1,2],[3,4],[5,6],[7,8]]",
        "output": "4"
      }
    ]
  },
  {
    "id": "interval-list-intersections",
    "title": "Interval List Intersections",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]",
        "output": "[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]"
      },
      {
        "input": "firstList = [[1,3],[5,9]], secondList = []",
        "output": "[]"
      }
    ]
  },
  {
    "id": "car-pooling",
    "title": "Car Pooling",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "trips = [[2,1,5],[3,3,7]], capacity = 4",
        "output": "false"
      },
      {
        "input": "trips = [[2,1,5],[3,3,7]], capacity = 5",
        "output": "true"
      }
    ]
  },
  {
    "id": "my-calendar-i",
    "title": "My Calendar I",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "[\"MyCalendar\",\"book\",\"book\",\"book\"] [[],[10,20],[15,25],[20,30]]",
        "output": "[null,true,false,true]"
      }
    ]
  },
  {
    "id": "remove-covered-intervals",
    "title": "Remove Covered Intervals",
    "patternId": "merge-intervals",
    "examples": [
      {
        "input": "intervals = [[1,4],[3,6],[2,8]]",
        "output": "2"
      },
      {
        "input": "intervals = [[1,4],[2,3]]",
        "output": "1"
      }
    ]
  },
  {
    "id": "linked-list-cycle",
    "title": "Linked List Cycle",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true"
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "true"
      }
    ]
  },
  {
    "id": "linked-list-cycle-ii",
    "title": "Linked List Cycle II",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "tail connects to node index 1"
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "tail connects to node index 0"
      }
    ]
  },
  {
    "id": "middle-linked-list",
    "title": "Middle of the Linked List",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[3,4,5]"
      },
      {
        "input": "head = [1,2,3,4,5,6]",
        "output": "[4,5,6]"
      }
    ]
  },
  {
    "id": "happy-number",
    "title": "Happy Number",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "n = 19",
        "output": "true"
      },
      {
        "input": "n = 2",
        "output": "false"
      }
    ]
  },
  {
    "id": "palindrome-linked-list",
    "title": "Palindrome Linked List",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [1,2,2,1]",
        "output": "true"
      },
      {
        "input": "head = [1,2]",
        "output": "false"
      }
    ]
  },
  {
    "id": "find-duplicate-number",
    "title": "Find the Duplicate Number",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "nums = [1,3,4,2,2]",
        "output": "2"
      },
      {
        "input": "nums = [3,1,3,4,2]",
        "output": "3"
      }
    ]
  },
  {
    "id": "reorder-list",
    "title": "Reorder List",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]"
      },
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[1,5,2,4,3]"
      }
    ]
  },
  {
    "id": "remove-nth-node-end",
    "title": "Remove Nth Node From End of List",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]"
      },
      {
        "input": "head = [1], n = 1",
        "output": "[]"
      }
    ]
  },
  {
    "id": "sort-list",
    "title": "Sort List",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "head = [4,2,1,3]",
        "output": "[1,2,3,4]"
      },
      {
        "input": "head = [-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]"
      }
    ]
  },
  {
    "id": "circular-array-loop",
    "title": "Circular Array Loop",
    "patternId": "fast-slow-pointers",
    "examples": [
      {
        "input": "nums = [2,-1,1,2,2]",
        "output": "true"
      },
      {
        "input": "nums = [-1,2]",
        "output": "false"
      }
    ]
  },
  {
    "id": "kth-largest",
    "title": "Kth Largest Element in an Array",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5"
      },
      {
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4"
      }
    ]
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]"
      }
    ]
  },
  {
    "id": "k-closest-points-origin",
    "title": "K Closest Points to Origin",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "points = [[1,3],[-2,2]], k = 1",
        "output": "[[-2,2]]"
      },
      {
        "input": "points = [[3,3],[5,-1],[-2,4]], k = 2",
        "output": "[[3,3],[-2,4]]"
      }
    ]
  },
  {
    "id": "find-k-pairs-smallest-sums",
    "title": "Find K Pairs with Smallest Sums",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
        "output": "[[1,2],[1,4],[1,6]]"
      },
      {
        "input": "nums1 = [1,1,2], nums2 = [1,2,3], k = 2",
        "output": "[[1,1],[1,1]]"
      }
    ]
  },
  {
    "id": "sort-characters-frequency",
    "title": "Sort Characters By Frequency",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "s = \"tree\"",
        "output": "\"eert\""
      },
      {
        "input": "s = \"cccaaa\"",
        "output": "\"aaaccc\""
      }
    ]
  },
  {
    "id": "reorganize-string",
    "title": "Reorganize String",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "\"aba\""
      },
      {
        "input": "s = \"aaab\"",
        "output": "\"\""
      }
    ]
  },
  {
    "id": "task-scheduler",
    "title": "Task Scheduler",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
        "output": "8"
      },
      {
        "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 0",
        "output": "6"
      }
    ]
  },
  {
    "id": "find-median-data-stream",
    "title": "Find Median from Data Stream",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"] [[],[1],[2],[],[3],[]]",
        "output": "[null,null,null,1.5,null,2.0]"
      }
    ]
  },
  {
    "id": "sliding-window-maximum",
    "title": "Sliding Window Maximum",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]"
      }
    ]
  },
  {
    "id": "kth-largest-stream",
    "title": "Kth Largest Element in a Stream",
    "patternId": "top-k-elements",
    "examples": [
      {
        "input": "[\"KthLargest\",\"add\",\"add\",\"add\",\"add\",\"add\"] [[3,[4,5,8,2]],[3],[5],[10],[9],[4]]",
        "output": "[null,4,5,5,8,8]"
      }
    ]
  },
  {
    "id": "binary-tree-level-order",
    "title": "Binary Tree Level Order Traversal",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      }
    ]
  },
  {
    "id": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [1,2,3,null,5,null,4]",
        "output": "[1,3,4]"
      },
      {
        "input": "root = [1,null,3]",
        "output": "[1,3]"
      }
    ]
  },
  {
    "id": "average-of-levels",
    "title": "Average of Levels in Binary Tree",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[3.00000,14.50000,11.00000]"
      },
      {
        "input": "root = [3,9,20,15,7]",
        "output": "[3.00000,14.50000,11.00000]"
      }
    ]
  },
  {
    "id": "minimum-depth-binary-tree",
    "title": "Minimum Depth of Binary Tree",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "2"
      },
      {
        "input": "root = [2,null,3,null,4,null,5,null,6]",
        "output": "5"
      }
    ]
  },
  {
    "id": "binary-tree-zigzag-level-order",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[20,9],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      }
    ]
  },
  {
    "id": "populating-next-right-pointers",
    "title": "Populating Next Right Pointers in Each Node",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [1,2,3,4,5,6,7]",
        "output": "[1,#,2,3,#,4,5,6,7,#]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ]
  },
  {
    "id": "n-ary-tree-level-order",
    "title": "N-ary Tree Level Order Traversal",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [1,null,3,2,4,null,5,6]",
        "output": "[[1],[3,2,4],[5,6]]"
      },
      {
        "input": "root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]",
        "output": "[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]"
      }
    ]
  },
  {
    "id": "binary-tree-level-order-ii",
    "title": "Binary Tree Level Order Traversal II",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[15,7],[9,20],[3]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      }
    ]
  },
  {
    "id": "find-bottom-left-tree-value",
    "title": "Find Bottom Left Tree Value",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "1"
      },
      {
        "input": "root = [1,2,3,4,null,5,6,null,null,7]",
        "output": "7"
      }
    ]
  },
  {
    "id": "maximum-width-binary-tree",
    "title": "Maximum Width of Binary Tree",
    "patternId": "tree-bfs",
    "examples": [
      {
        "input": "root = [1,3,2,5,3,null,9]",
        "output": "4"
      },
      {
        "input": "root = [1,3,2,5,null,null,9,6,null,7]",
        "output": "7"
      }
    ]
  },
  {
    "id": "path-sum",
    "title": "Path Sum",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
        "output": "true"
      },
      {
        "input": "root = [1,2,3], targetSum = 5",
        "output": "false"
      }
    ]
  },
  {
    "id": "path-sum-ii",
    "title": "Path Sum II",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
        "output": "[[5,4,11,2],[5,8,4,5]]"
      },
      {
        "input": "root = [1,2,3], targetSum = 5",
        "output": "[]"
      }
    ]
  },
  {
    "id": "maximum-depth-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2"
      }
    ]
  },
  {
    "id": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3"
      },
      {
        "input": "root = [1,2]",
        "output": "1"
      }
    ]
  },
  {
    "id": "validate-bst",
    "title": "Validate Binary Search Tree",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true"
      },
      {
        "input": "root = [5,1,4,null,null,3,6]",
        "output": "false"
      }
    ]
  },
  {
    "id": "lowest-common-ancestor-bst",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "output": "6"
      },
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "output": "2"
      }
    ]
  },
  {
    "id": "lowest-common-ancestor-binary-tree",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "output": "3"
      },
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "output": "5"
      }
    ]
  },
  {
    "id": "binary-tree-maximum-path-sum",
    "title": "Binary Tree Maximum Path Sum",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [1,2,3]",
        "output": "6"
      },
      {
        "input": "root = [-10,9,20,null,null,15,7]",
        "output": "42"
      }
    ]
  },
  {
    "id": "flatten-binary-tree-linked-list",
    "title": "Flatten Binary Tree to Linked List",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ]
  },
  {
    "id": "count-good-nodes-binary-tree",
    "title": "Count Good Nodes in Binary Tree",
    "patternId": "tree-dfs",
    "examples": [
      {
        "input": "root = [3,1,4,3,null,1,5]",
        "output": "4"
      },
      {
        "input": "root = [3,3,null,4,2]",
        "output": "3"
      }
    ]
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]"
      }
    ]
  },
  {
    "id": "permutations",
    "title": "Permutations",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]"
      }
    ]
  },
  {
    "id": "combination-sum",
    "title": "Combination Sum",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]"
      },
      {
        "input": "candidates = [2,3,5], target = 8",
        "output": "[[2,2,2,2],[2,3,3],[3,5]]"
      }
    ]
  },
  {
    "id": "word-search",
    "title": "Word Search",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "output": "true"
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"",
        "output": "true"
      }
    ]
  },
  {
    "id": "n-queens",
    "title": "N-Queens",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "n = 4",
        "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]"
      },
      {
        "input": "n = 1",
        "output": "[[\"Q\"]]"
      }
    ]
  },
  {
    "id": "letter-combinations-phone",
    "title": "Letter Combinations of a Phone Number",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "digits = \"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
      },
      {
        "input": "digits = \"\"",
        "output": "[]"
      }
    ]
  },
  {
    "id": "generate-parentheses",
    "title": "Generate Parentheses",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      },
      {
        "input": "n = 1",
        "output": "[\"()\"]"
      }
    ]
  },
  {
    "id": "combinations",
    "title": "Combinations",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "n = 4, k = 2",
        "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"
      },
      {
        "input": "n = 1, k = 1",
        "output": "[[1]]"
      }
    ]
  },
  {
    "id": "palindrome-partitioning",
    "title": "Palindrome Partitioning",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
      },
      {
        "input": "s = \"a\"",
        "output": "[[\"a\"]]"
      }
    ]
  },
  {
    "id": "restore-ip-addresses",
    "title": "Restore IP Addresses",
    "patternId": "backtracking",
    "examples": [
      {
        "input": "s = \"25525511135\"",
        "output": "[\"255.255.11.135\",\"255.255.111.35\"]"
      },
      {
        "input": "s = \"0000\"",
        "output": "[\"0.0.0.0\"]"
      }
    ]
  },
  {
    "id": "daily-temperatures",
    "title": "Daily Temperatures",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]"
      },
      {
        "input": "temperatures = [30,40,50,60]",
        "output": "[1,1,1,0]"
      }
    ]
  },
  {
    "id": "next-greater-element-i",
    "title": "Next Greater Element I",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "nums1 = [4,1,2], nums2 = [1,3,4,2]",
        "output": "[-1,3,-1]"
      },
      {
        "input": "nums1 = [2,4], nums2 = [1,2,3,4]",
        "output": "[3,-1]"
      }
    ]
  },
  {
    "id": "next-greater-element-ii",
    "title": "Next Greater Element II",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "nums = [1,2,1]",
        "output": "[2,-1,2]"
      },
      {
        "input": "nums = [1,2,3,4,3]",
        "output": "[2,3,4,-1,4]"
      }
    ]
  },
  {
    "id": "largest-rectangle-histogram",
    "title": "Largest Rectangle in Histogram",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10"
      },
      {
        "input": "heights = [2,4]",
        "output": "4"
      }
    ]
  },
  {
    "id": "trapping-rain-water-stack",
    "title": "Trapping Rain Water (Stack)",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6"
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9"
      }
    ]
  },
  {
    "id": "online-stock-span",
    "title": "Online Stock Span",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "[\"StockSpanner\",\"next\",\"next\",\"next\",\"next\",\"next\",\"next\",\"next\"] [[],[100],[80],[60],[70],[60],[75],[85]]",
        "output": "[null,1,1,1,2,1,4,6]"
      }
    ]
  },
  {
    "id": "remove-k-digits",
    "title": "Remove K Digits",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "num = \"1432219\", k = 3",
        "output": "\"1219\""
      },
      {
        "input": "num = \"10200\", k = 1",
        "output": "\"200\""
      }
    ]
  },
  {
    "id": "sum-subarray-minimums",
    "title": "Sum of Subarray Minimums",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "arr = [3,1,2,4]",
        "output": "17"
      },
      {
        "input": "arr = [11,81,94,43,3]",
        "output": "444"
      }
    ]
  },
  {
    "id": "asteroid-collision",
    "title": "Asteroid Collision",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "asteroids = [5,10,-5]",
        "output": "[5,10]"
      },
      {
        "input": "asteroids = [8,-8]",
        "output": "[]"
      }
    ]
  },
  {
    "id": "final-prices-discount",
    "title": "Final Prices With a Special Discount in a Shop",
    "patternId": "monotonic-stack",
    "examples": [
      {
        "input": "prices = [8,4,6,2,3]",
        "output": "[4,2,4,2,3]"
      },
      {
        "input": "prices = [1,2,3,4,5]",
        "output": "[1,2,3,4,5]"
      }
    ]
  },
  {
    "id": "assign-cookies",
    "title": "Assign Cookies",
    "patternId": "greedy",
    "examples": [
      {
        "input": "g = [1,2,3], s = [1,1]",
        "output": "1"
      },
      {
        "input": "g = [1,2], s = [1,2,3]",
        "output": "2"
      }
    ]
  },
  {
    "id": "lemonade-change",
    "title": "Lemonade Change",
    "patternId": "greedy",
    "examples": [
      {
        "input": "bills = [5,5,5,10,20]",
        "output": "true"
      },
      {
        "input": "bills = [5,5,10,10,20]",
        "output": "false"
      }
    ]
  },
  {
    "id": "jump-game-ii",
    "title": "Jump Game II",
    "patternId": "greedy",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "2"
      },
      {
        "input": "nums = [2,3,0,1,4]",
        "output": "2"
      }
    ]
  },
  {
    "id": "gas-station",
    "title": "Gas Station",
    "patternId": "greedy",
    "examples": [
      {
        "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        "output": "3"
      },
      {
        "input": "gas = [2,3,4], cost = [3,4,3]",
        "output": "-1"
      }
    ]
  },
  {
    "id": "can-place-flowers",
    "title": "Can Place Flowers",
    "patternId": "greedy",
    "examples": [
      {
        "input": "flowerbed = [1,0,0,0,1], n = 1",
        "output": "true"
      },
      {
        "input": "flowerbed = [1,0,0,0,1], n = 2",
        "output": "false"
      }
    ]
  },
  {
    "id": "queue-reconstruction-height",
    "title": "Queue Reconstruction by Height",
    "patternId": "greedy",
    "examples": [
      {
        "input": "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",
        "output": "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]"
      }
    ]
  },
  {
    "id": "partition-labels",
    "title": "Partition Labels",
    "patternId": "greedy",
    "examples": [
      {
        "input": "s = \"ababcbacadefegdehijhklij\"",
        "output": "[9,7,8]"
      },
      {
        "input": "s = \"eccbbbbdec\"",
        "output": "[10]"
      }
    ]
  },
  {
    "id": "valid-parenthesis-string",
    "title": "Valid Parenthesis String",
    "patternId": "greedy",
    "examples": [
      {
        "input": "s = \"(*)\"",
        "output": "true"
      },
      {
        "input": "s = \"(*))\"",
        "output": "true"
      }
    ]
  },
  {
    "id": "hand-of-straights",
    "title": "Hand of Straights",
    "patternId": "greedy",
    "examples": [
      {
        "input": "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",
        "output": "true"
      },
      {
        "input": "hand = [1,2,3,4,5], groupSize = 4",
        "output": "false"
      }
    ]
  },
  {
    "id": "minimum-add-parentheses",
    "title": "Minimum Add to Make Parentheses Valid",
    "patternId": "greedy",
    "examples": [
      {
        "input": "s = \"())\"",
        "output": "1"
      },
      {
        "input": "s = \"(((\"",
        "output": "3"
      }
    ]
  },
  {
    "id": "number-connected-components",
    "title": "Number of Connected Components in an Undirected Graph",
    "patternId": "union-find",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
        "output": "2"
      },
      {
        "input": "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        "output": "1"
      }
    ]
  },
  {
    "id": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "patternId": "union-find",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        "output": "true"
      },
      {
        "input": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
        "output": "false"
      }
    ]
  },
  {
    "id": "accounts-merge",
    "title": "Accounts Merge",
    "patternId": "union-find",
    "examples": [
      {
        "input": "accounts = [[\"John\",\"a@mail.com\",\"b@mail.com\"],[\"John\",\"b@mail.com\",\"c@mail.com\"]]",
        "output": "[[\"John\",\"a@mail.com\",\"b@mail.com\",\"c@mail.com\"]]"
      }
    ]
  },
  {
    "id": "satisfiability-equations",
    "title": "Satisfiability of Equality Equations",
    "patternId": "union-find",
    "examples": [
      {
        "input": "equations = [\"a==b\",\"b!=a\"]",
        "output": "false"
      },
      {
        "input": "equations = [\"b==a\",\"a==b\"]",
        "output": "true"
      }
    ]
  },
  {
    "id": "number-provinces",
    "title": "Number of Provinces",
    "patternId": "union-find",
    "examples": [
      {
        "input": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
        "output": "2"
      },
      {
        "input": "isConnected = [[1,0,0],[0,1,0],[0,0,1]]",
        "output": "3"
      }
    ]
  },
  {
    "id": "most-stones-removed",
    "title": "Most Stones Removed with Same Row or Column",
    "patternId": "union-find",
    "examples": [
      {
        "input": "stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]",
        "output": "5"
      },
      {
        "input": "stones = [[0,0]]",
        "output": "0"
      }
    ]
  },
  {
    "id": "regions-cut-by-slashes",
    "title": "Regions Cut By Slashes",
    "patternId": "union-find",
    "examples": [
      {
        "input": "grid = [\" /\",\"/ \"]",
        "output": "2"
      },
      {
        "input": "grid = [\" /\",\"  \"]",
        "output": "1"
      }
    ]
  },
  {
    "id": "smallest-string-swaps",
    "title": "Smallest String With Swaps",
    "patternId": "union-find",
    "examples": [
      {
        "input": "s = \"dcab\", pairs = [[0,3],[1,2]]",
        "output": "\"bacd\""
      },
      {
        "input": "s = \"dcab\", pairs = [[0,3],[1,2],[0,2]]",
        "output": "\"abcd\""
      }
    ]
  },
  {
    "id": "similar-string-groups",
    "title": "Similar String Groups",
    "patternId": "union-find",
    "examples": [
      {
        "input": "strs = [\"tars\",\"rats\",\"arts\",\"star\"]",
        "output": "2"
      },
      {
        "input": "strs = [\"omv\",\"ovm\"]",
        "output": "1"
      }
    ]
  },
  {
    "id": "making-large-island",
    "title": "Making A Large Island",
    "patternId": "union-find",
    "examples": [
      {
        "input": "grid = [[1,0],[0,1]]",
        "output": "3"
      },
      {
        "input": "grid = [[1,1],[1,0]]",
        "output": "4"
      }
    ]
  },
  {
    "id": "count-prefixes-given-string",
    "title": "Count Prefixes of a Given String",
    "patternId": "trie",
    "examples": [
      {
        "input": "words = [\"a\",\"b\",\"c\",\"ab\",\"bc\",\"abc\"], s = \"abc\"",
        "output": "3"
      },
      {
        "input": "words = [\"a\",\"a\"], s = \"aa\"",
        "output": "2"
      }
    ]
  },
  {
    "id": "index-pairs-string",
    "title": "Index Pairs of a String",
    "patternId": "trie",
    "examples": [
      {
        "input": "text = \"thestoryofleetcodeandme\", words = [\"story\",\"fleet\",\"leetcode\"]",
        "output": "[[3,7],[9,13],[10,17]]"
      },
      {
        "input": "text = \"ababa\", words = [\"aba\",\"ab\"]",
        "output": "[[0,1],[0,2],[2,3],[2,4]]"
      }
    ]
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "patternId": "trie",
    "examples": [
      {
        "input": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"eat\",\"oath\"]"
      }
    ]
  },
  {
    "id": "replace-words",
    "title": "Replace Words",
    "patternId": "trie",
    "examples": [
      {
        "input": "dictionary = [\"cat\",\"bat\",\"rat\"], sentence = \"the cattle was rattled by the battery\"",
        "output": "\"the cat was rat by the bat\""
      }
    ]
  },
  {
    "id": "sum-prefix-scores-strings",
    "title": "Sum of Prefix Scores of Strings",
    "patternId": "trie",
    "examples": [
      {
        "input": "words = [\"abc\",\"ab\",\"bc\",\"b\"]",
        "output": "[5,4,3,2]"
      },
      {
        "input": "words = [\"abcd\"]",
        "output": "[4]"
      }
    ]
  },
  {
    "id": "longest-word-dictionary",
    "title": "Longest Word in Dictionary",
    "patternId": "trie",
    "examples": [
      {
        "input": "words = [\"w\",\"wo\",\"wor\",\"worl\",\"world\"]",
        "output": "\"world\""
      },
      {
        "input": "words = [\"a\",\"banana\",\"app\",\"appl\",\"ap\",\"apply\",\"apple\"]",
        "output": "\"apple\""
      }
    ]
  },
  {
    "id": "count-prefix-suffix-pairs",
    "title": "Count Prefix and Suffix Pairs",
    "patternId": "trie",
    "examples": [
      {
        "input": "words = [\"a\",\"aba\",\"ababa\",\"aa\"]",
        "output": "4"
      },
      {
        "input": "words = [\"pa\",\"papa\",\"ma\",\"mama\"]",
        "output": "2"
      }
    ]
  },
  {
    "id": "palindrome-pairs",
    "title": "Palindrome Pairs",
    "patternId": "trie",
    "examples": [
      {
        "input": "words = [\"abcd\",\"dcba\",\"lls\",\"s\",\"sssll\"]",
        "output": "[[0,1],[1,0],[3,2],[2,4]]"
      }
    ]
  },
  {
    "id": "maximum-xor-two-numbers",
    "title": "Maximum XOR of Two Numbers in an Array",
    "patternId": "trie",
    "examples": [
      {
        "input": "nums = [3,10,5,25,2,8]",
        "output": "28"
      },
      {
        "input": "nums = [14,70,53,83,49,91,36,80,92,51,66,70]",
        "output": "127"
      }
    ]
  },
  {
    "id": "search-suggestions-system",
    "title": "Search Suggestions System",
    "patternId": "trie",
    "examples": [
      {
        "input": "products = [\"mobile\",\"mouse\",\"moneypot\",\"monitor\",\"mousepad\"], searchWord = \"mouse\"",
        "output": "[[\"mobile\",\"moneypot\",\"monitor\"],[\"mobile\",\"moneypot\",\"monitor\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"]]"
      }
    ]
  },
  {
    "id": "missing-number-cyclic",
    "title": "Missing Number",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [3,0,1]",
        "output": "2"
      },
      {
        "input": "nums = [0,1]",
        "output": "2"
      }
    ]
  },
  {
    "id": "find-disappeared-numbers",
    "title": "Find All Numbers Disappeared in an Array",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [4,3,2,7,8,2,3,1]",
        "output": "[5,6]"
      },
      {
        "input": "nums = [1,1]",
        "output": "[2]"
      }
    ]
  },
  {
    "id": "find-duplicates-array",
    "title": "Find All Duplicates in an Array",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [4,3,2,7,8,2,3,1]",
        "output": "[2,3]"
      },
      {
        "input": "nums = [1,1,2]",
        "output": "[1]"
      }
    ]
  },
  {
    "id": "first-missing-positive",
    "title": "First Missing Positive",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [1,2,0]",
        "output": "3"
      },
      {
        "input": "nums = [3,4,-1,1]",
        "output": "2"
      }
    ]
  },
  {
    "id": "set-mismatch",
    "title": "Set Mismatch",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [1,2,2,4]",
        "output": "[2,3]"
      },
      {
        "input": "nums = [1,1]",
        "output": "[1,2]"
      }
    ]
  },
  {
    "id": "find-corrupt-pair",
    "title": "Find the Corrupt Pair",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [3,1,2,5,2]",
        "output": "[2,4]"
      },
      {
        "input": "nums = [3,1,2,3,6,4]",
        "output": "[3,5]"
      }
    ]
  },
  {
    "id": "smallest-missing-positive-k",
    "title": "Kth Missing Positive Number",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "arr = [2,3,4,7,11], k = 5",
        "output": "9"
      },
      {
        "input": "arr = [1,2,3,4], k = 2",
        "output": "6"
      }
    ]
  },
  {
    "id": "first-k-missing-positive",
    "title": "First K Missing Positive Numbers",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [3,-1,4,5,5], k = 3",
        "output": "[1,2,6]"
      },
      {
        "input": "nums = [2,3,4], k = 3",
        "output": "[1,5,6]"
      }
    ]
  },
  {
    "id": "find-duplicate-cyclic",
    "title": "Find the Duplicate Number with Placement",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "nums = [1,3,4,2,2]",
        "output": "2"
      },
      {
        "input": "nums = [3,1,3,4,2]",
        "output": "3"
      }
    ]
  },
  {
    "id": "find-missing-and-duplicate",
    "title": "Find Missing and Duplicate Values",
    "patternId": "cyclic-sort",
    "examples": [
      {
        "input": "grid = [[1,3],[2,2]]",
        "output": "[2,4]"
      },
      {
        "input": "grid = [[9,1,7],[8,9,2],[3,4,6]]",
        "output": "[9,5]"
      }
    ]
  },
  {
    "id": "single-element-sorted-array",
    "title": "Single Element in a Sorted Array",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "nums = [1,1,2,3,3,4,4,8,8]",
        "output": "2"
      },
      {
        "input": "nums = [3,3,7,7,10,11,11]",
        "output": "10"
      }
    ]
  },
  {
    "id": "search-range",
    "title": "Find First and Last Position of Element in Sorted Array",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "nums = [5,7,7,8,8,10], target = 8",
        "output": "[3,4]"
      },
      {
        "input": "nums = [5,7,7,8,8,10], target = 6",
        "output": "[-1,-1]"
      }
    ]
  },
  {
    "id": "search-insert-position",
    "title": "Search Insert Position",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "nums = [1,3,5,6], target = 5",
        "output": "2"
      },
      {
        "input": "nums = [1,3,5,6], target = 2",
        "output": "1"
      }
    ]
  },
  {
    "id": "peak-index-mountain-array",
    "title": "Peak Index in a Mountain Array",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "arr = [0,1,0]",
        "output": "1"
      },
      {
        "input": "arr = [0,2,1,0]",
        "output": "1"
      }
    ]
  },
  {
    "id": "split-array-largest-sum",
    "title": "Split Array Largest Sum",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "nums = [7,2,5,10,8], k = 2",
        "output": "18"
      },
      {
        "input": "nums = [1,2,3,4,5], k = 2",
        "output": "9"
      }
    ]
  },
  {
    "id": "min-days-bouquets",
    "title": "Minimum Number of Days to Make m Bouquets",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "bloomDay = [1,10,3,10,2], m = 3, k = 1",
        "output": "3"
      },
      {
        "input": "bloomDay = [1,10,3,10,2], m = 3, k = 2",
        "output": "-1"
      }
    ]
  },
  {
    "id": "smallest-divisor-threshold",
    "title": "Find the Smallest Divisor Given a Threshold",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "nums = [1,2,5,9], threshold = 6",
        "output": "5"
      },
      {
        "input": "nums = [44,22,33,11,1], threshold = 5",
        "output": "44"
      }
    ]
  },
  {
    "id": "find-right-interval",
    "title": "Find Right Interval",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "intervals = [[1,2]]",
        "output": "[-1]"
      },
      {
        "input": "intervals = [[3,4],[2,3],[1,2]]",
        "output": "[-1,0,1]"
      }
    ]
  },
  {
    "id": "search-unknown-size-array",
    "title": "Search in a Sorted Array of Unknown Size",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "reader = [-1,0,3,5,9,12], target = 9",
        "output": "4"
      },
      {
        "input": "reader = [-1,0,3,5,9,12], target = 2",
        "output": "-1"
      }
    ]
  },
  {
    "id": "maximize-minimum-sweetness",
    "title": "Divide Chocolate",
    "patternId": "modified-binary-search",
    "examples": [
      {
        "input": "sweetness = [1,2,3,4,5,6,7,8,9], k = 5",
        "output": "6"
      },
      {
        "input": "sweetness = [5,6,7,8,9,1,2,3,4], k = 8",
        "output": "1"
      }
    ]
  },
  {
    "id": "running-sum-1d-array",
    "title": "Running Sum of 1d Array",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[1,3,6,10]"
      },
      {
        "input": "nums = [1,1,1,1,1]",
        "output": "[1,2,3,4,5]"
      }
    ]
  },
  {
    "id": "range-sum-query-immutable",
    "title": "Range Sum Query - Immutable",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "[\"NumArray\",\"sumRange\",\"sumRange\",\"sumRange\"] [[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]",
        "output": "[null,1,-1,-3]"
      }
    ]
  },
  {
    "id": "find-pivot-index",
    "title": "Find Pivot Index",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "nums = [1,7,3,6,5,6]",
        "output": "3"
      },
      {
        "input": "nums = [1,2,3]",
        "output": "-1"
      }
    ]
  },
  {
    "id": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "nums = [1,1,1], k = 2",
        "output": "2"
      },
      {
        "input": "nums = [1,2,3], k = 3",
        "output": "2"
      }
    ]
  },
  {
    "id": "continuous-subarray-sum",
    "title": "Continuous Subarray Sum",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "nums = [23,2,4,6,7], k = 6",
        "output": "true"
      },
      {
        "input": "nums = [23,2,6,4,7], k = 13",
        "output": "false"
      }
    ]
  },
  {
    "id": "contiguous-array",
    "title": "Contiguous Array",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "nums = [0,1]",
        "output": "2"
      },
      {
        "input": "nums = [0,1,0]",
        "output": "2"
      }
    ]
  },
  {
    "id": "product-array-except-self",
    "title": "Product of Array Except Self",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]"
      },
      {
        "input": "nums = [-1,1,0,-3,3]",
        "output": "[0,0,9,0,0]"
      }
    ]
  },
  {
    "id": "range-sum-query-2d-immutable",
    "title": "Range Sum Query 2D - Immutable",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "[\"NumMatrix\",\"sumRegion\",\"sumRegion\",\"sumRegion\"] [[matrix],[2,1,4,3],[1,1,2,2],[1,2,2,4]]",
        "output": "[null,8,11,12]"
      }
    ]
  },
  {
    "id": "matrix-block-sum",
    "title": "Matrix Block Sum",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1",
        "output": "[[12,21,16],[27,45,33],[24,39,28]]"
      },
      {
        "input": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2",
        "output": "[[45,45,45],[45,45,45],[45,45,45]]"
      }
    ]
  },
  {
    "id": "number-submatrices-sum-target",
    "title": "Number of Submatrices That Sum to Target",
    "patternId": "prefix-sum",
    "examples": [
      {
        "input": "matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0",
        "output": "4"
      },
      {
        "input": "matrix = [[1,-1],[-1,1]], target = 0",
        "output": "5"
      }
    ]
  }
];
