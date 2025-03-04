function solution(speed_limit, cameras) {
  let answer = 0;
  for (let i = 0; i < cameras.length; i++) {
    let [prevDistance, prev_hour] = [0, 0];
    let [currentDistance, current_hour] = cameras[i];

    if (i !== 0) {
      [prevDistance, prev_hour] = cameras[i - 1];
    }

    let speed = (currentDistance - prevDistance) / (current_hour - prev_hour);
    if (speed > speed_limit) answer++;
  }

  return answer;
}

console.log(
  solution(60, [
    [60, 1],
    [130, 2],
    [240, 4],
    [432, 7],
  ])
);
