import Quadrilateral from '../src/quadrilateral.js';

describe('Quadrilateral', () => {
  test('should correctly create a quadrilateral object with four lengths', () => {
    const quadrilateral = new Quadrilateral(2,3,4,5);
    expect(quadrilateral.side1).toEqual(2);
    expect(quadrilateral.side2).toEqual(3);
    expect(quadrilateral.side3).toEqual(4);
    expect(quadrilateral.side4).toEqual(5);
  });
});

test('should correctly determine whether four lengths are not a quadrilateral', () => {
  const notQuad = new Quadrilateral(3,9,22,3);
  expect(notQuad.checkType()).toEqual("not a quadrilateral");
});
