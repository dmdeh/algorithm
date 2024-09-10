/*
2024.09.10

programmers

간단한 문제 설명
*/

function solution(arr) {
  let result = [0, 0];

  function divide(arr) {
    let length = arr.length;
    let sum = arr.flat().reduce((a, b) => a + b, 0);
    if (sum === 0) {
      result[0]++;
      return;
    } else if (sum === length ** 2) {
      result[1]++;
      return;
    }

    let mid = length / 2;

    let area1 = arr.slice(0, mid).map((n) => n.slice(0, mid));
    let area2 = arr.slice(0, mid).map((n) => n.slice(mid));
    let area3 = arr.slice(mid).map((n) => n.slice(0, mid));
    let area4 = arr.slice(mid).map((n) => n.slice(mid));

    divide(area1);
    divide(area2);
    divide(area3);
    divide(area4);
  }
  
  divide(arr);
  return result;
}
