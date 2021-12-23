import Quadrilateral from '../src/quadrilateral.js';

describe('Quadrilateral', () => {
  test('should correctly create a quadrilateral object with four lengths', () => {
    const quadrilateral = new quadrilateral(2,3,4,5,);
    expect(quadrilateral.side1).toEqual(2);
    expect(quadrilateral.side2).toEqual(3);
    expect(quadrilateral.side3).toEqual(4);
  });
});