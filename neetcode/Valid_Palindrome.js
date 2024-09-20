/*
2024.09.20

neetcode

Two Pointers (1) (easy)
*/

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const split = s.split(" ").join("").split("");
    const arr = [];
    for (let i = 0; i < split.length; i++) {
      const num = split[i].charCodeAt();
      if (
        (num >= 48 && num <= 57) ||
        (num >= 65 && num <= 90) ||
        (num >= 97 && num <= 122)
      ) {
        arr.push(split[i].toLowerCase());
      }
    }
    console.log(arr);
    let j = 0;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[j] !== arr[k]) return false;
      j++;
      k--;
    }
    return true;
  }
}
