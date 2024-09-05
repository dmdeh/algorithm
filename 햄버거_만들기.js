/* 
2024.09.05

programmers

ingredient	                 result
[2, 1, 1, 2, 3, 1, 2, 3, 1]	 2
[1, 3, 2, 1, 2, 1, 3, 1, 2]	 0
*/

function solution(ingredient) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);

    if (arr.length >= 4) {
      const lastFour = arr.slice(-4);
      if (lastFour.join("") === "1231") {
        answer++;
        arr.splice(-4);
        // arr.length -= 4 이 방식이 시간 덜 잡아먹는다
      }
    }
  }

  return answer;
}
