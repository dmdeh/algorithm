/*
2024.08.14

programmers

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

nums	        result
[1,2,3,4]	    1
[1,2,7,6,4]	  4
*/

function solution(nums) {
  let answer = 0;
  const l = nums.length;
  console.log(l);
  for (let i = 0; i < l - 2; i++) {
    for (let j = i + 1; j < l - 1; j++) {
      for (let k = j + 1; k < l; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
