/**
 * Returns coordinates of the corners anti-clockwise from bottom-left (assumes base is horizontal)
 * @param {number} a - the base
 * @param {number} b - the height
 * @param {Object} point - the bottom left point
 * @param {number} point.x - the x coordinate
 * @param {number} point.y - the y coordinate
 * @returns {Object[]} the corners   
*/

/*
Medium › corners of 2 by 3 rectangle starting at (0,0) should be (0,0), (2,0), (2,3), (0,3)

    expect(received).toEqual(expected) // deep equality

    - Expected  - 4
    + Received  + 4

    @@ -2,17 +2,17 @@
        Object {
          "x": 0,
          "y": 0,
        },
        Object {
    -     "x": 2,
    -     "y": 0,
    +     "x": 0,
    +     "y": 3,
        },
        Object {
          "x": 2,
          "y": 3,
        },
        Object {
    -     "x": 0,
    -     "y": 3,
    +     "x": 2,
    +     "y": 0,
        },
      ]
*/

function getRectangleCorners(a, b, point) {
  // get the bottom right point
  const point1 = {
    x: point.x + a,
    y: point.y
  }
  // then the top right
  const point2 = {
    x: point.x + a,
    y: point.y + b
  }
  // then the top left
  const point3 = {
    x: point.x,
    y: point.y + b
  }
  // and return them as an array of points
  // need { x: 0, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 3 }, { x: 0, y: 3 }
  return [point, point1, point2, point3]
}

module.exports = getRectangleCorners
