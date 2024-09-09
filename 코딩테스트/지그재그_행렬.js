/* 
2024.08.12

지그재그행렬. (n, row, col)이 들어왔을 때 
nxn 크기의 행렬에서 [row, col]에 해당하는 위치의 값 출력. 첫 좌표는 [1,1]부터 시작

5x5
1  2  6  7  15
3  4  8  14 16
4  9  13 17 22
10 12 18 21 23
11 19 20 24 25

6x6
1  2  6  7  15 16
3  4  8  14 17 26
4  9  13 18 25 27
10 12 19 24 28 33
11 20 23 29 32 34
21 22 30 31 35 36
*/

function zigzagNumber(n, row, col) {
  row--;
  col--;

  let num = 1;
  for (let diagonal = 0; diagonal < row + col; diagonal++) {
    num += Math.min(diagonal, n - 1) - Math.max(0, diagonal - n + 1) + 1;
    console.log("🚀 ~ zigzagNumber :", diagonal, num);
  }

  const v = Math.max(0, col + row - n + 1);
  num += (row + col) % 2 === 0 ? col - v : row - v;

  return num;
}

console.log(zigzagNumber(5, 1, 1)); // 5x5 배열의 (2, 3) 위치
console.log(zigzagNumber(5, 1, 2)); // 5x5 배열의 (2, 3) 위치
console.log(zigzagNumber(5, 1, 3)); // 5x5 배열의 (2, 3) 위치
console.log(zigzagNumber(5, 1, 4)); // 5x5 배열의 (2, 3) 위치
console.log(zigzagNumber(5, 1, 5)); // 5x5 배열의 (2, 3) 위치
console.log(zigzagNumber(5, 4, 3)); // 5x5 배열의 (2, 3) 위치
console.log(zigzagNumber(6, 4, 3)); // 6x6 배열의 (4, 2) 위치
