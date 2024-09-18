/*
2024.09.18

programmers

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  var answer = 0;
  let split = numbers.split("");

  function isFrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function search(arr, str) {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        let copy = [...arr];
        copy.splice(i, 1);
        search(copy, str + arr[i]);
      }
    }
    if (str > 0) set.add(Number(str));
  }

  let set = new Set();
  search(split, "");

  const result = Array.from(set);
  console.log(result);
  
  result.forEach((n) => {
    if (isFrime(n)) answer++;
  });

  return answer;
}
