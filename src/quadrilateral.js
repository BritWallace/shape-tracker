export default function Quadrilateral(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
};

Quadrilateral.prototype.checkType = function() {
  let longestSide = this.side1;

    // if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
  //   return "not a triangle";
  // } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
  //   return "scalene triangle";
  // }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
  //   return "equilateral triangle";
  // } else {
  //   return "isosceles triangle";
  // }
  // return("not a quadrilateral");
};  