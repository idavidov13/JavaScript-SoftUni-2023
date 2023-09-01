/* 1.	Старата Библиотека
Ани отива до родния си град след много дълъг период извън страната. Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга. Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). Докато Ани не намери любимата си книга или не провери всички в библиотеката, програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). Книгите в библиотеката са свършили щом получите текст "No More Books".
•	Ако не открие книгата да се отпечата на два реда: 
o	"The book you search is not here!"
o	"You checked {брой} books."
•	Ако открие книгата си се отпечатва един ред:
o	"You checked {брой} books and found it."  
Примерен вход и изход
Вход	Изход
(["Troy", "Stronger", "Life Style", "Troy"])	You checked 2 books and found it.
(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])	The book you search is not here! You checked 4 books.
(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]) You checked 10 books and found it.	*/

function solve(arr) {
  let index = 0;
  let bookWeNeed = arr[index];
  index++;
  let checks = 1;
  let curBook = arr[index];
  index++;
  while (curBook !== "No More Books") {
    if (curBook === bookWeNeed) {
      console.log(`You checked ${checks - 1} books and found it.`);
      break;
    }
    checks++;
    curBook = arr[index];
    index++;
  }
  if (curBook === "No More Books") {
    console.log("The book you search is not here!");
    console.log(`You checked ${checks - 1} books.`);
  }
}

/* 2.	Подготовка за изпит
Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
Незадоволителна е всяка оценка, която е по-малка или равна на 4.
Вход
•	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
•	След това многократно се четат по два реда:
o	Име на задача - текст (низ)
o	Оценка - цяло число в интервала [2…6]
Изход
•	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
o	"Average score: {средна оценка}"
o	"Number of problems: {броя на всички задачи}"
o	"Last problem: {името на последната задача}"
•	Ако получи определеният брой незадоволителни оценки:
o	"You need a break, {брой незадоволителни оценки} poor grades."
Средната оценка да бъде форматирана до втория знак след десетичната запетая. 
Примерен вход и изход
Вход	Изход
(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])	Average score: 5.25 Number of problems: 4 Last problem: Bus	
Вход	Изход
(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])	You need a break, 2 poor grades.*/

function solve(arr) {
  let index = 0;
  let numberBadGrades = Number(arr[index]);
  index++;
  let curTask = arr[index];
  index++;
  let taskGrade = Number(arr[index]);
  index++;
  let tasks = 0;
  let totalGrades = 0;
  let badGrades = 0;
  while (curTask !== "Enough") {
    if (taskGrade <= 4) {
      badGrades++;
      if (badGrades === numberBadGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
        break;
      }
      tasks++;
      totalGrades += taskGrade;
      curTask = arr[index];
      index++;
      taskGrade = Number(arr[index]);
      index++;
      continue;
    }
    tasks++;
    totalGrades += taskGrade;
    curTask = arr[index];
    index++;
    taskGrade = Number(arr[index]);
    index++;
  }
  if (curTask === "Enough") {
    console.log(`Average score: ${(totalGrades / tasks).toFixed(2)}`);
    console.log(`Number of problems: ${tasks}`);
    console.log(`Last problem: ${arr[index - 4]}`);
  }
}

/* 3.	Почивка
Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
Вход
От масива се четат:
•	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
•	Налични пари - реално число в интервала [0.00... 25000.00]
След това многократно се четат по два реда:
•	Вид действие – текст с възможности "spend" и "save".
•	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
Изход
Функцията трябва да приключи при следните случаи:
•	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
o	"You can't save the money."
o	"{Общ брой изминали дни}"
•	Ако Джеси събере парите за почивката на конзолата се изписва:
o	"You saved the money for {общ брой изминали дни} days."
Примерен вход и изход
Вход	Изход	
(["2000", "1000", "spend", "1200", "save", "2000"])	You saved the money for 2 days.
(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])	You can't save the money. 5
(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])	You saved the money for 4 days.*/

function solve(arr) {
  let index = 0;
  let holidayPrice = Number(arr[index]);
  index++;
  let startingMoney = Number(arr[index]);
  index++;
  let curState = arr[index];
  index++;
  let curPrice = Number(arr[index]);
  index++;
  let spendingDays = 0;
  let totaldays = 0;
  let booleanFlag = false;
  for (let i = 1; i <= arr.length; i++) {
    switch (curState) {
      case "spend":
        spendingDays++;
        totaldays++;
        if (spendingDays === 5) {
          break;
        } else if (curPrice >= startingMoney) {
          startingMoney = 0;
          curState = arr[index];
          index++;
          curPrice = Number(arr[index]);
          index++;
        } else if (curPrice < startingMoney) {
          startingMoney -= curPrice;
          curState = arr[index];
          index++;
          curPrice = Number(arr[index]);
          index++;
        }
        break;
      case "save":
        totaldays++;
        startingMoney += curPrice;
        curState = arr[index];
        if (startingMoney >= holidayPrice) {
          console.log(`You saved the money for ${totaldays} days.`);
          booleanFlag = true;
          break;
        }
        index++;
        curPrice = Number(arr[index]);
        index++;
        break;
    }
  }
  if (booleanFlag === false) {
    console.log("You can't save the money.");
    console.log(`${totaldays - 1}`);
  }
}

/* 4. Стъпки
Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."
Примерен вход и изход
Вход	Изход	Вход	Изход
(["1000", "1500", "2000", "6500"]) 	Goal reached! Good job! 1000 steps over the goal!	
(["1500", "300", "2500", "3000", "Going home", "200"])	2500 more steps to reach goal.
Вход	Изход	Вход	Изход
(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])	Goal reached! Good job! 298 steps over the goal!	
(["125", "250", "4000", "30", "2678", "4682"])	Goal reached! Good job! 1765 steps over the goal!*/

function solve(arr) {
  let index = 0;
  let totalSteps = 0;
  let curSteps = arr[index];
  let stepsToHome = 0;
  index++;
  while (curSteps !== "Going home") {
    curSteps = Number(curSteps);
    totalSteps += curSteps;
    if (totalSteps >= 10000) {
      console.log("Goal reached! Good job!");
      console.log(`${totalSteps - 10000} steps over the goal!`);
      break;
    }
    curSteps = arr[index];
    index++;
  }
  if (curSteps === "Going home") {
    stepsToHome = Number(arr[index]);
    totalSteps += stepsToHome;
    if (totalSteps >= 10000) {
      console.log("Goal reached! Good job!");
      console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
      console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
  }
}

/* 5.  Монети
Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 
Примерен вход и изход
Вход	Изход	Обяснения
(["1.23"])	4	
(["2"])	1	
(["0.56"])	3	
(["2.73"])	5	*/

function solve(arr) {
  let sum = Number(arr[0]);
  let coins = 0;
  let dvaLeva = 0;
  let edinLeva = 0;
  let fiftyCent = 0;
  let twentyCent = 0;
  let tenCent = 0;
  let fiveCent = 0;
  let twoCent = 0;
  let oneCent = 0;
  while (sum !== 0) {
    if (sum >= 2) {
      dvaLeva = Math.trunc(sum / 2);
      coins += dvaLeva;
      sum = (sum - dvaLeva * 2).toFixed(2);
    } else if (sum >= 1) {
      edinLeva = Math.trunc(sum / 1);
      coins += edinLeva;
      sum = Number((sum - edinLeva * 1).toFixed(2));
    } else if (sum >= 0.5) {
      fiftyCent = Math.trunc(sum / 0.5);
      coins += fiftyCent;
      sum = Number((sum - fiftyCent * 0.5).toFixed(2));
    } else if (sum >= 0.2) {
      twentyCent = Math.trunc(sum / 0.2);
      coins += twentyCent;
      sum = Number((sum - twentyCent * 0.2).toFixed(2));
    } else if (sum >= 0.1) {
      tenCent = Math.trunc(sum / 0.1);
      coins += tenCent;
      sum = Number((sum - tenCent * 0.1).toFixed(2));
    } else if (sum >= 0.05) {
      fiveCent = Math.trunc(sum / 0.05);
      coins += fiveCent;
      sum = Number((sum - fiveCent * 0.05).toFixed(2));
    } else if (sum >= 0.02) {
      twoCent = Math.trunc(sum / 0.02);
      coins += twoCent;
      sum = Number((sum - twoCent * 0.02).toFixed(2));
    } else if (sum >= 0.01) {
      oneCent = Math.trunc(sum / 0.01);
      coins += oneCent;
      sum = Number((sum - oneCent * 0.01).toFixed(2));
    }
  }
  console.log(coins);
}

/* 6.  Торта
Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. Той обаче не знае колко парчета могат да си вземат гостите от нея. Вашата задача е да напишете функция, която изчислява броя на парчетата, които гостите са взели, преди тя да свърши. Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000]) и след това на всеки ред, до получаване на командата "STOP" или докато не свърши тортата, броят на парчетата, които гостите вземат от нея. 
Бележка: Едно парче торта е с размер 1х1 см.
Да се отпечата на конзолата един от следните редове:
•	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
•	"No more cake left! You need {брой недостигащи парчета} pieces more."
Примерен вход и изход
Вход	Изход	Обяснения
[("10", "10", "20", "20", "20", "20", "21"])	No more cake left! You need 1 pieces more.
[("10", "2", "2", "4", "6", "STOP"])	8 pieces are left.*/

function solve(arr) {
  let index = 0;
  let length = Number(arr[index]);
  index++;
  let width = Number(arr[index]);
  index++;
  let takenPieces = arr[index];
  index++;
  let totalPieces = length * width;
  while (takenPieces !== "STOP") {
    takenPieces = Number(takenPieces);
    totalPieces -= takenPieces;
    if (totalPieces <= 0) {
      console.log(`No more cake left! You need ${-totalPieces} pieces more.`);
      break;
    }
    takenPieces = arr[index];
    index++;
  }
  if (takenPieces === "STOP") {
    console.log(`${totalPieces} pieces are left.`);
  }
}

/* 7.	Преместване
На осемнадесетия си рожден ден на Хосе взел решение, че ще се изнесе да живее на квартира. Опаковал багажа си в кашони и намерил подходяща обява за апартамент под наем. Той започва да пренася своя багаж на части, защото не може да пренесе целия наведнъж. Има ограничено свободно пространство в новото си жилище, където може да разположи вещите, така че мястото да бъде подходящо за живеене.
Напишете програма, която изчислява свободния обем от жилището на Хосе, който остава след като пренесе багажа си. 
Бележка: Един кашон е с точни размери:  1m. x 1m. x 1m.
Вход
Потребителят въвежда следните данни на отделни редове:
1.	Широчина на свободното пространство - цяло число в интервала [1...1000]
2.	Дължина на свободното пространство - цяло число в интервала [1...1000]
3.	Височина на свободното пространство - цяло число в интервала [1...1000]
4.	На следващите редове (до получаване на команда "Done") - брой кашони, които се пренасят в квартирата - цели числа в интервала [1...10000];
Функцията трябва да приключи прочитането на данни при команда "Done" или ако свободното място свърши.
Изход
Да се отпечата на конзолата един от следните редове:
-	Ако стигнете до командата "Done" и има още свободно място:
"{брой свободни куб. метри} Cubic meters left."
-	Ако свободното място свърши преди да е дошла команда "Done":
"No more free space! You need {брой недостигащи куб. метри} Cubic meters more."
Примерен вход и изход
Вход	Изход	
(["10", "10", "2", "20", "20", "20", "20", "122"])	No more free space! You need 2 Cubic meters more.	
(["10", "1", "2", "4",  "6", "Done"])	10 Cubic meters left.*/

function solve(arr) {
  let index = 0;
  let length = Number(arr[index]);
  index++;
  let width = Number(arr[index]);
  index++;
  let hight = Number(arr[index]);
  index++;
  let numCases = arr[index];
  index++;
  let maxCases = length * width * hight;
  while (numCases !== "Done") {
    numCases = Number(numCases);
    maxCases -= numCases;
    if (maxCases < 0) {
      console.log(
        `No more free space! You need ${-maxCases} Cubic meters more.`
      );
      break;
    }
    numCases = arr[index];
    index++;
  }
  if (maxCases > 0) {
    console.log(`${maxCases} Cubic meters left.`);
  }
}
