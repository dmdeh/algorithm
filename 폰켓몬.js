/*
2024.08.14

programmers
총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.

nums            return
[3,1,2,3]	      2
[3,3,3,2,2,4]	  3
[3,3,3,2,2,2]	  2
*/

function solution(nums) {
  let answer = 0;
  const set = new Set(nums);
  const result = [...set]
  return answer = nums.length / 2 <= result.length ? nums.length / 2 : result.length;
}