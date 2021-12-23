export default function Quadrilateral(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
};

Quadrilateral.prototype.checkType = function() {
  let longestSide = this.side1;

  if(longestSide < this.side2) {
    longestSide = this.side2;
  }
  if(longestSide < this.side3) {
    longestSide = this.side3;
  }
  if(longestSide < this.side4) {
    longestSide = this.side4;
  }
  if((this.side1 + this.side2 + this.side3 + this.side4 - longestSide) > longestSide) {
    return("is a quadrilateral");
  } else {
    return("not a quadrilateral");
  }
};  