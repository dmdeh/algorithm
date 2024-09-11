/*
2024.09.11

programmers

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

또 풀어보기
*/

function solution(name) {
  var answer = 0;
  const A = "A".codePointAt();
  const max = "Z".codePointAt() - A + 1;
  const arr = name.split("");
  const result = [];
  for (let s of arr) {
    let v = s.codePointAt() - A;
    v = v <= max / 2 ? v : max - v;
    result.push(v);
  }
  answer += result.reduce((a, b) => a + b, 0);

  const l = result.length;
  let move = l - 1;
  for (let i = 0; i < l; i++) {
    let next = i + 1;
    while (result[next] === 0) {
      next++;
    }
    move = Math.min(move, i + l - next + Math.min(i, l - next));
  }
  answer += move;
  return answer;
}
