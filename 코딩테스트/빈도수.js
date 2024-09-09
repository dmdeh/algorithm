/*
2024.09.09

코딩테스트

인수로 들어온 배열에서 각 숫자의 빈도수를 계산하고 최소 빈도수에 맞춰 배열 수정
수정한 배열의 length 리턴

ex) [1, 1, 2, 2, 3, 3, 3, 4, 4, 4] 
    1, 2는 2번씩, 3, 4는 3번씩이므로 2번에 맞춰 수정
    -> [1, 1, 2, 2, 3, 3, 4, 4]
    -> 8 출력
*/

function solution(arr) {
  const obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  const min = Math.min(...Object.values(obj));

  const result = [];
  for (let key in obj) {
    let number = min;
    while (number > 0) {
      result.push(key);
      number--;
    }
  }
  return result.length;
}

console.log(solution([1, 1, 2, 2, 3, 3, 3, 4, 4, 4]));
// 출력 8
// [1, 1, 2, 2, 3, 3, 4, 4];
console.log(solution([9, 8, 5, 2, 9]));
// 출력 4
// [9, 8, 5, 2]
console.log(solution([9, 9, 9]));
// 출력 3
// [9, 9, 9]
