//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Triangle {
  constructor(...sides) {
    [this.sideA, this.sideB, this.sideC] = sides;
    try {
      sides.sort();
      if (
        this.sideA + this.sideB < this.sideC ||
        this.sideA <= 0 ||
        this.sideB <= 0 ||
        this.sideC <= 0
      ) {
        throw new Error("Invalid inputs");
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  }

  get isEquilateral() {
    try {
      if (
        this.sideA === this.sideB &&
        this.sideB === this.sideC &&
        this.sideC !== 0
      ) {
        return true;
      } else {
        throw new Error("Not a valid equilateral");
      }
    } catch (error) {
      return false;
    }
  }

  get isIsosceles() {
    try {
      if (
        (this.sideA === this.sideB ||
          this.sideB === this.sideC ||
          this.sideA === this.sideC) &&
        this.sideA + this.sideB > this.sideC &&
        this.sideB + this.sideC > this.sideA &&
        this.sideA + this.sideC > this.sideB
      ) {
        return true;
      } else {
        throw new Error("Not a valid isosceles");
      }
    } catch (error) {
      return false;
    }
  }

  get isScalene() {
    try {
      if (
        this.sideA !== this.sideB &&
        this.sideB !== this.sideC &&
        this.sideA !== this.sideC &&
        this.sideA + this.sideB > this.sideC &&
        this.sideB + this.sideC > this.sideA &&
        this.sideA + this.sideC > this.sideB
      ) {
        return true;
      } else {
        throw new Error("Not a valid scalene");
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

const t1 = new Triangle(3, 1, 1);
const t2 = new Triangle(1, 1, 3);

console.log(t1.isIsosceles);
console.log(t1);
console.log(t2.isIsosceles);
console.log(t2);
