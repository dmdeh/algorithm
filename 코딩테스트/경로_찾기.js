/* 다시 풀어보기 */

function solution(r, c) {
  let arr = Array.from({ length: r }, () => Array.from({ length: c }).fill(1));
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[r - 1][c - 1];
}
