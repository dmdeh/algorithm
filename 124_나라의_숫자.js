/* 
2024.09.05

programmers

10진법	 124 나라	
1	      1	
2	     	2	
3	     	4	
4	     	11	
5	     	12	
6	     	14
7	     	21
8	     	22
9	     	24
10		  41
*/

function solution(n) {
  let answer = "";
  const num = [1, 2, 4];
  while (n > 0) {
    n--;
    answer = num[n % 3] + answer;
    n = Math.floor(n / 3);
  }

  return answer;
}
