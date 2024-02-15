// 4. Balloons

// You have been tasked to create several classes for balloons.

// Implement a class Balloon, which is initialized with a color (String) and gasWeight (Number). These two arguments should be public members.

// Implement another class PartyBalloon, which inherits the Balloon class and is initialized with 2 additional parameters - ribbonColor (String) and ribbonLength (Number). The PartyBalloon class should have a property ribbon, which is an object with color and length - the ones given upon initialization. The ribbon property should have a getter.

// Implement another class BirthdayBalloon, which inherits the PartyBalloon class and is initialized with 1 extra parameter - text (String). The text should be a property and should have a getter.
function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
      this.ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      };
    }

    set ribbon(data) {
      this._ribbon = data;
    }

    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLengthm, text) {
      super(color, gasWeight, ribbonColor, ribbonLengthm);
      this.text = text;
    }

    get text() {
      return this._text;
    }

    set text(text) {
      this._text = text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = solution();

let testBalloon = new classes.Balloon("yellow", 20.5);

let testPartyBalloon = new classes.PartyBalloon(
  "yellow",
  20.5,

  "red",
  10.25
);

let ribbon = testPartyBalloon.ribbon;

console.log(testBalloon);

console.log(testPartyBalloon);

console.log(ribbon);
