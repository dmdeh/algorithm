/*
2025.03.01

programmers
깊이/너비 우선 탐색(DFS/BFS)
*/

function solution(n, computers) {
  let visited = [];
  let answer = 0;
  function dfs(node) {
    visited[node] = true;
    for (let next = 0; next < n; next++) {
      if (computers[node][next] === 1 && !visited[next]) dfs(next);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
