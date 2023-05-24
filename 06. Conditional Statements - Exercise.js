/*1. Сумиране на секунди 
Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им 
време във формат "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35").*/

function secondsSum(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);
  let totalTime = firstTime + secondTime + thirdTime;
  //
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

/*2.	Бонус точки
Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-долу. Да се напише функция, която пресмята бонус точките, 
които получава числото и общия брой точки (числото + бонуса).
⦁	Ако числото е до 100 включително, бонус точките са 5.
⦁	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
⦁	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

⦁	Допълнителни бонус точки (начисляват се отделно от предходните):
⦁	За четно число  + 1 т.
⦁	За число, което завършва на 5  + 2 т.*/

function bonusPoints(input) {
  let points = Number(input[0]);
  let bonus = 0;
  if (points <= 100) {
    bonus = 5;
  } else if (points <= 1000) {
    bonus = points * 0.2;
  } else {
    bonus = points * 0.1;
  }

  if (points % 2 == 0) {
    bonus += 1;
  } else if (points % 10 == 5) {
    bonus += 2;
  }
  console.log(bonus);
  console.log(points + bonus);
}

/*3.	Време + 15 минути
Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:
минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри,
с водеща нула, когато е необходимо.*/

function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let changedMinutes = minutes + 15;
  let totalMinutes = hours * 60 + changedMinutes;
  let newHours = Math.floor(totalMinutes / 60);
  let newMinutes = totalMinutes % 60;
  if (newHours === 24) {
    newHours = 0;
  }
  if (newMinutes < 10) {
    console.log(`${newHours}:0${newMinutes}`);
  } else {
    console.log(`${newHours}:${newMinutes}`);
  }
}

/*4.	Магазин за детски играчки
Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. 
Цени на играчките:
⦁	Пъзел - 2.60 лв.
⦁	Говореща кукла - 3 лв.
⦁	Плюшено мече - 4.10 лв.
⦁	Миньон - 8.20 лв.
⦁	Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се 
пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
Вход
От конзолата се четат 6 реда:
⦁	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
⦁	Брой пъзели - цяло число в интервала [0… 1000]
⦁	Брой говорещи кукли - цяло число в интервала [0 … 1000]
⦁	Брой плюшени мечета - цяло число в интервала [0 … 1000]
⦁	Брой миньони - цяло число в интервала [0 … 1000]
⦁	Брой камиончета - цяло число в интервала [0 … 1000]
Изход
На конзолата се отпечатва:
⦁	Ако парите са достатъчни се отпечатва:
⦁	"Yes! {оставащите пари} lv left."
⦁	Ако парите НЕ са достатъчни се отпечатва:
⦁	"Not enough money! {недостигащите пари} lv needed."
Резултатът трябва да се форматира до втория знак след десетичната запетая.*/

function toys(input) {
  let tripPrice = Number(input[0]);
  let puzzels = Number(input[1]);
  let kukli = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);
  let totalOrder =
    2.6 * puzzels + 3 * kukli + 4.1 * bears + 8.2 * minions + 2 * trucks;
  let pieces = puzzels + kukli + bears + minions + trucks;
  if (pieces >= 50) {
    totalOrder = totalOrder * 0.75;
  }
  let moneyWin = totalOrder * 0.9;
  if (moneyWin >= tripPrice) {
    let leftMoney = parseFloat(moneyWin - tripPrice).toFixed(2);
    console.log(`Yes! ${leftMoney} lv left.`);
  } else {
    let unMoney = parseFloat(tripPrice - moneyWin).toFixed(2);
    console.log(`Not enough money! ${unMoney} lv needed.`);
  }
}

/*5.	Годзила срещу Конг
Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, дали предвидените средства 
са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
Известно е, че:
⦁	Декорът за филма е на стойност 10% от бюджета. 
⦁	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
Вход
Функцията получава 3 аргумента:
⦁	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
⦁	Брой на статистите – цяло число в интервала [1 … 500]
⦁	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
Изход
На конзолата трябва да се отпечатат два реда:
⦁	Ако  парите за декора и дрехите са повече от бюджета:
⦁	"Not enough money!"
⦁	"Wingard needs {парите недостигащи за филма} leva more."
⦁	Ако парите за декора и дрехите са по малко или равни на бюджета:
⦁	"Action!" 
⦁	"Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.*/

function solve(input) {
  let budget = Number(input[0]);
  let countWalkons = Number(input[1]);
  let priceClothes = Number(input[2]);
  let decore = Number((0.1*budget).toFixed(2));
  let sumClothes = Number((countWalkons * priceClothes).toFixed(2));
  if (countWalkons > 150) {
    sumClothes = Number((0.9 * priceClothes*countWalkons).toFixed(2));
  }
  totalPrice = decore + sumClothes;
  if (budget < totalPrice) {
    console.log('Not enough money!');
    console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
  } else if (budget >= totalPrice) {
    console.log('Action!');
    console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
  }
}

/*6.	Световен рекорд по плуване
Иван решава да подобри Световния рекорд по плуване на дълги разстояния. Функцията получава: рекордът в секунди,  който Иван трябва да подобри,  разстоянието в метри
, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. Да се напише функция, която изчислява дали се е справил със задачата, като се има 
предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението 
на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.
Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд. 
Вход
Функцията получава 3 аргумента:
⦁	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
⦁	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
⦁	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
Изход
Отпечатването на конзолата зависи от резултата:
⦁	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
⦁	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
⦁	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
⦁	"No, he failed! He was {недостигащите секунди} seconds slower."
Резултатът трябва да се форматира до втория знак след десетичната запетая.*/

function worldRecord(input) {
  let worldRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timeForMeter = Number(input[2]);
  let timeSwimmer = distance * timeForMeter;
  let lostTime = Math.floor(distance / 15) * 12.5;
  let fullTime = timeSwimmer + lostTime;
  if (worldRecord > fullTime) {
    console.log(
      `Yes, he succeeded! The new world record is ${fullTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(fullTime - worldRecord).toFixed(
        2
      )} seconds slower.`
    );
  }
}

/*7. Пазаруване 
Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната 
сметка. Важат следните цени:
⦁	Видеокарта – 250 лв./бр.
⦁	Процесор – 35% от цената на закупените видеокарти/бр.
⦁	Рам памет – 10% от цената на закупените видеокарти/бр.
Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
Вход
Входът се състои от четири реда:
⦁	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
⦁	Броят видеокарти - цяло число в интервала [0…100]
⦁	Броят процесори - цяло число в интервала [0…100]
⦁	Броят рам памет - цяло число в интервала [0…100]
Изход
На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
⦁	Ако бюджета е достатъчен:
"You have {остатъчен бюджет} leva left!"
⦁	Ако сумата надхвърля бюджета:
"Not enough money! You need {нужна сума} leva more!"
Резултатът да се форматира до втория знак след десетичната запетая.*/

function buying(input) {
  let budget = Number(input[0]);
  let videoCards = Number(input[1]);
  let processors = Number(input[2]);
  let ramMemory = Number(input[3]);
  let priceForVideoCards = 250 * videoCards;
  let priceForProcessors = 0.35 * priceForVideoCards * processors;
  let priceForRamMemory = 0.1 * priceForVideoCards * ramMemory;
  let totalPrice = priceForVideoCards + priceForProcessors + priceForRamMemory;
  if (videoCards > processors) {
    totalPrice = 0.85 * totalPrice;
  }
  if (budget >= totalPrice) {
    console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(totalPrice - budget).toFixed(
        2
      )} leva more!`
    );
  }
}

/* 8. Обедна почивка
По време на обедната почивка искате да изгледате епизод от своя любим сериал. Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно 
време да изгледате епизода. По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих 
ще бъде 1/4 от времето за почивка. 
Вход
От конзолата се четат 3 реда:
⦁	Име на сериал – текст
⦁	Продължителност на епизод  – цяло число в диапазона [10… 90]
⦁	Продължителност на почивката  – цяло число в диапазона [10… 120]
Изход
На конзолата да се изпише един ред:
⦁	Ако времето е достатъчно да изгледате епизода: 
"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
⦁	Ако времето не Ви е достатъчно:
"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
Времето да се закръгли до най-близкото цяло число нагоре.*/

function lunchTime(input) {
  let name = input[0];
  let seriesTime = Number(input[1]).toFixed(0);
  let lunchBreak = Number(input[2]).toFixed(0);
  let timeForEat = (lunchBreak / 8);
  let spareTime = (lunchBreak / 4);
  let timeForMovie = (lunchBreak - spareTime - timeForEat);
  if (seriesTime <= timeForMovie) {
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeForMovie - seriesTime)} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(seriesTime - timeForMovie)} more minutes.`);
  }
}
