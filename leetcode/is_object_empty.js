/*
2024.08.21

leetcode

2727. Is Object Empty
*/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

var isEmpty = function (obj) {
  return Object.keys(obj).length === 0 ? true : false;
};
