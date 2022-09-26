/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 * 
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 * 
 */

function getRectangleMinMaxPoints(rectangle) {
  let minPoint = rectangle[0];
  for (let point of rectangle) {
    if (point.x < minPoint.x || point.y < minPoint.y) {
      minPoint = point
    }
  }

  let maxPoint;
  for (let point of rectangle) {
    if (point.x !== minPoint.x && point.y !== minPoint.y) {
      maxPoint = point;
      break;
    }
  }

  return [minPoint, maxPoint]
}

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */
function rectangleOverlap(rectangle1, rectangle2) {
  let [A, B] = getRectangleMinMaxPoints(rectangle1);
  let [C, D] = getRectangleMinMaxPoints(rectangle2);

  let width = Math.min(B.x, D.x) - Math.max(A.x, C.x)
  let height = Math.min(B.y, D.y) - Math.max(A.y, C.y)

  if (width <= 0 || height <= 0) return 0;
  return width * height
}

module.exports = rectangleOverlap
