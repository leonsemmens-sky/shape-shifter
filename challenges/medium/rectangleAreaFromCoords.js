/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords(points) {
  let [A, B, C, D] = points
  let oppositePoint;
  for (let point of points) {
    if (point.x !== A.x && point.y !== A.y) {
      oppositePoint = point;
      break;
    }
  }
  return Math.abs(A.x - oppositePoint.x) * Math.abs(A.y - oppositePoint.y)
}

module.exports = rectangleAreaFromCoords
