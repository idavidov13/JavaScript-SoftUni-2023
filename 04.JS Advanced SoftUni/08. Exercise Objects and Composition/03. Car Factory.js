// 3. Car Factory

// Write a program that assembles a car by giving requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfill the client’s order. You have the following parts in storage:

// An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.

// Small engine: { power: 90, volume: 1800 }

// Normal engine: { power: 120, volume: 2400 }

// Monster engine: { power: 200, volume: 3500 }

// A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint them any color.

// Hatchback: { type: 'hatchback', color: <as required> }

// Coupe: { type: 'coupe', color: <as required> }

// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number.

// Input

// You will receive an object as an argument to your function. The format will be as follows:

// { model: <model name>,

// power: <minimum power>,

// color: <color>,

// carriage: <carriage type>,

// wheelsize: <size> }
// Output

// Return the resulting car object as a result of your function. See the examples for details.
function carFactory(obj) {
  let inches = obj.wheelsize;
  if (inches % 2 == 0) {
    inches = inches - 1;
  }
  let newCar = {
    model: obj.model,
    engine: { power: 0, volume: 0 },
    carriage: { type: obj.carriage, color: obj.color },
    wheels: [inches, inches, inches, inches],
  };
  let engine = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  };

  if (obj.power <= 90) {
    newCar.engine.power = engine.small.power;
    newCar.engine.volume = engine.small.volume;
  } else if (obj.power <= 120) {
    newCar.engine.power = engine.normal.power;
    newCar.engine.volume = engine.normal.volume;
  } else {
    newCar.engine.power = engine.monster.power;
    newCar.engine.volume = engine.monster.volume;
  }
  return newCar;
}
carFactory({
  model: "VW Golf II",
  power: 190,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
