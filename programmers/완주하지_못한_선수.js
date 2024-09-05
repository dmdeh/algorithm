/* 
2024.08.16

programmers

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

["mislav", "stanko", "mislav", "ana"],	["stanko", "ana", "mislav"]	

"mislav"
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  return participant.filter((name, index) => name !== completion[index])[0];
}
