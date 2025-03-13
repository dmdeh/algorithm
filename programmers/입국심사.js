function solution(n, times) {
  times.sort((a, b) => a - b);

  let answer = 0;
  let min = times[0];
  let max = times[times.length - 1] * n;
  
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let sum = 0;

    for (let time of times) {
      sum += Math.floor(mid / time);
      if (sum >= n) break;
    }

    if (sum >= n) {
      answer = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
}
