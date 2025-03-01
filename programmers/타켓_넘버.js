/*
2025.03.01

programmers
깊이/너비 우선 탐색(DFS/BFS)
*/

function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);

  return answer;
}
