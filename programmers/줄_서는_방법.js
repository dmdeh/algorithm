/* 
2024.09.19

programmers

*/

function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let fac = arr.reduce((a, c) => a * c, 1);
  k--;
  let answer = [];
  while (answer.length < n) {
    fac = fac / arr.length;
    let v = arr[Math.floor(k / fac)];
    answer.push(v);
    k = k % fac;
    console.log(arr, fac, v, k);
    arr = arr.filter((n) => n !== v);
  }
  return answer;
}
