/*
2024.09.12

programmers

어렵다 
정규표현식 써라

또 풀어보기
*/

function solution(expression) {
  const operator = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];
  const arr = expression.split(/(\D)/);
  let max = 0;

  for (let p of operator) {
    const result = cal([...arr], p);
    console.log(p, result);
    max = Math.max(max, Math.abs(result));
  }
  return max;
}

function cal(arr, operator) {
  for (let op of operator) {
    while (arr.includes(op)) {
      const i = arr.indexOf(op);
      const n1 = +arr[i - 1];
      const n2 = +arr[i + 1];
      let result;
      switch (op) {
        case "*":
          result = n1 * n2;
          break;
        case "+":
          result = n1 + n2;
          break;
        case "-":
          result = n1 - n2;
          break;
      }

      arr.splice(i - 1, 3, result);
    }
  }
  return arr[0];
}
