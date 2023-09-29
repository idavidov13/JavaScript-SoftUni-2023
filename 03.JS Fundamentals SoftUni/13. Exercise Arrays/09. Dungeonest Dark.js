// 9. *Dungeonest Dark

// As a young adventurer, you seek gold and glory in the darkest dungeons there are.

// You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"

// Each room contains - an item or a monster; and a number. They are separated by a single space.

// ("item/monster number").

// · If the first part is "potion":

// o You are healed with the number in the second part. However, your health cannot exceed your initial health (100).

// o Print: `You healed for {healing-number} hp.`

// o After that, print your current health: `Current health: {number} hp.`

// · If the first part is "chest":

// o You have found some coins, the number in the second part.

// o Print: `You found {coins} coins.`

// · In any other case, you are facing a monster, you are going to fight.

// The second part of the room contains the attack of the monster, and the first the monster's name. You should remove the monster's attack from your health.

// o If you are not dead (health > 0) you have slain the monster, and you should print:

// `You slayed {monster-name}.`

// o If you have died, print: `You died! Killed by {monster-name}.` and your quest is over.

// Print the best room you`ve to manage to reach: `Best room: {room}`.

// · If you managed to go through all the rooms in the dungeon, print on the next three lines:

// "You've made it!"

// "Coins: {coins}"

// "Health: {health}"
function dungeonest(arr) {
  let health = 100;
  let coins = 0;
  let str = arr[0];
  let array = str.split("|");
  let index = 0;
  let curString = array[index];
  index++;
  let curStage = 0;
  while (health > 0) {
    let curArray = curString.split(" ");
    curStage++;
    if (curArray[0] == "potion") {
      health += Number([curArray[1]]);
      if (health > 100) {
        let overhealth = health;
        health = 100;
        console.log(
          `You healed for ${
            health > 100 ? 0 : Number(curArray[1]) - overhealth + 100
          } hp.`
        );
        console.log(`Current health: ${health} hp.`);
      } else {
        console.log(`You healed for ${Number(curArray[1])} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (curArray[0] == "chest") {
      coins += Number(curArray[1]);
      console.log(`You found ${Number(curArray[1])} coins.`);
    } else {
      health -= Number(curArray[1]);

      if (health <= 0) {
        console.log(`You died! Killed by ${curArray[0]}.`);
        console.log(`Best room: ${curStage}`);
        break;
      } else {
        console.log(`You slayed ${curArray[0]}.`);
      }
    }

    if (curStage == array.length) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
      break;
    }
    curString = array[index];
    index++;
  }
}
dungeonest(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
