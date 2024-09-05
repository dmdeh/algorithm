/* 
2024.08.13

programmers

양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 
인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(n) {
  let answer = Array(n).fill().map(() => Array(n).fill(0));
  const arr = Array(n ** 2).fill().map((_, index) => index + 1);

  let top = 0, bottom = n - 1, left = 0, right = n - 1;
  let idx = 0;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      answer[top][i] = arr[idx++];
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      answer[i][right] = arr[idx++];
    }
    right--;

    for (let i = right; i >= left; i--) {
      answer[bottom][i] = arr[idx++];
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      answer[i][left] = arr[idx++];
    }
    left++;
  }

  return answer;
}
