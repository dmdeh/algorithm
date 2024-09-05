/*
2024.09.04

leetcode

2705. Compact Object
*/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] !== null) {
        let v = compactObject(obj[i]);
        if (v) result.push(v);
      }
    }
    return result;
  } else if (typeof obj === "object" && obj !== null) {
    let result = {};
    for (let key in obj) {
      if (obj[key] !== null) {
        let v = compactObject(obj[key]);
        if (v) result[key] = v;
      }
    }
    return result;
  }
  return obj;
};

// return obj를 안해서 계속 틀렸다 어렵다
