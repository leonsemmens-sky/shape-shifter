const rectangleArea = require('./rectangleArea')

/**
 * @param {number} a - the base
 * @param {number} b - the height
 * @returns {number} the area
 */

function triangleArea(a, b) {
  return rectangleArea(a, b) / 2
}

module.exports = triangleArea