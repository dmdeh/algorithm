/*
2024.09.04

programmers
*/

function solution(numbers) {
  const result = numbers.map(String).sort((a, b) => a + b > b + a ? -1: 1).join("");
  return result <= 0 ? "0" : result;
}

// arr.sort((a, b) => a[0] - b[0])가 문자열의 첫 번째 문자의 ASCII 값을 기준으로 정렬하기 때문입니다. 이로 인해 예상한 숫자 순서대로 정렬되지 않습니다. 
// string으로 바꿔서 a[0] - b[0]로 첫 숫자로 비교하려고 했는데 내 생각과 다르게 작동했다.