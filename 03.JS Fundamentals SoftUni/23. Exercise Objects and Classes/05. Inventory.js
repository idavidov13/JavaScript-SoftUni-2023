// 5.	Inventory
// Create a function, which creates a register for heroes, with their names, level, and items (if they have such).
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}
function inventory(arr) {
  let allHeroes = [];
  class Hero {
    constructor(heroName, heroLevel, items) {
      (this.name = heroName), (this.level = heroLevel), (this.items = items);
    }
  }
  for (let curHero of arr) {
    let currentHero = curHero.split("/");
    //console.log(currentHero);
    let hero = new Hero(currentHero[0], currentHero[1], currentHero[2]);
    //console.log(hero);
    allHeroes.push(hero);
  }
  allHeroes.sort((a, b) => {
    return a.level - b.level;
  });
  for (let each of allHeroes) {
    console.log(`Hero: ${each.name.trim()}`);
    console.log(`level => ${each.level.trim()}`);
    console.log(`items => ${each.items.trim()}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
