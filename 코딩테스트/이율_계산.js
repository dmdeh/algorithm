/*
원금 p가 m개월 후에 최소 d원이 되도록 하는 가장 작은 월 이율 k%를 구하기

매달 이자 = p * k%
소수점 이하는 버린다.
m개월 동안 반복한 후, 최종 금액이 d 이상이 되도록 하는 최소 k를 찾는다.
 */

function solution(p, m, d) {
  var answer = -1;
  let left = 0;
  let right = 100;

  while (left <= right) {
    let k = Math.floor((left + right) / 2);

    let amount = p;

    for (let i = 0; i < m; i++) {
      let interest = Math.floor((amount * k) / 100);
      amount += interest;
    }

    if (amount >= d) {
      answer = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return answer;
}

