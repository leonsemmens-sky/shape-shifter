/**
 * Works out the hypotenuse of a right-triangle with two shorter sides a and b
 * using Pythagoras' Theorem (https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @param {number} a - a side length
 * @param {number} b - the other side length
 * @returns {number} the hypotenuse
*/

function triangleHypotenuse(a, b) {
  // a^2 + b^2 = c^2
  return Math.sqrt(a * a + b * b) //2.6457513110645907
}

module.exports = triangleHypotenuse
