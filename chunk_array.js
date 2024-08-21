/*
2024.08.21

leetcode

2677. Chunk Array
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const array = [];
  let i = 0;
  while (i < arr.length) {
    i = 0;
    array.push(arr.splice(i, size));
    i += size - 1;
  }
  if (arr.length > 0) array.push(arr);

  return array;
};
