/*
2024.09.24

neetcode

Input: numbers = [1,2,3,4], target = 3
Output: [1,2]

Input: numbers = [-1,0], target = -1
Output: [1,2]
*/

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      const num = target - numbers[i];
      const idx = numbers.indexOf(num, i + 1);
      if (idx !== -1) {
        return [i + 1, idx + 1];
      }
    }
  }
}
