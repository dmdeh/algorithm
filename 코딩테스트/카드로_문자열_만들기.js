/* 다시 풀어보기 */

function solution(card, word) {
  var answer = [];

  for (let w of word) {
    const arr = card.map((c) => c.split(""));
    let cardUsed = Array.from({ length: card.length }).fill(false);
    let canMake = true;

    for (let char of w) {
      let letterFound = false;
      for (let i = 0; i < arr.length; i++) {
        const idx = arr[i].indexOf(char);

        if (idx !== -1) {
          arr[i].splice(idx, 1);
          cardUsed[i] = true;
          letterFound = true;
          break;
        }
      }

      if (!letterFound) {
        canMake = false;
        break;
      }
    }

    if (canMake && cardUsed.every((u) => u)) {
      answer.push(w);
    }
  }

  return answer.length > 0 ? answer : ["-1"];
}
