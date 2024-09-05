/*
2024.08.20

programmers

n				lost							  reserve
5				[2, 4]							[3]
3				[3]			    				[1]
10			[1, 2, 3, 4, 5, 6]  [1, 2, 3]
5				[2, 3, 5]						[2, 3, 4]
5       [4, 5]					    [3, 4]
 */

function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  var answer = n - realLost.length;

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  realLost.reverse().map((n) => {
    for (let i = realReserve.length - 1; i >= 0; i--) {
      if (n - 1 === realReserve[i] || n + 1 === realReserve[i]) {
        answer++;
        realReserve.splice(i, 1);
        break;
      }
    }
  });
  return answer;
}
