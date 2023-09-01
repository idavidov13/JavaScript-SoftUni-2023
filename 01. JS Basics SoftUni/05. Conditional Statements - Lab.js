/*1. Отлична оценка
Първата задача от тази тема е да се напише функция, която чете оценка, получена като аргумент и отпечатва "Excellent!", ако оценката е 5.50 или по-висока.*/

function excellentGrade(input) {
    let grade = Number(input[0]);
    if (grade >= 5.50) {
        console.log('Excellent!');
    }
}

/*2. По-голямото число
Да се напише функция, която получава две цели числа и отпечатва по-голямото от двете.*/

function greaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

/*3. Четно или нечетно
Да се напише  функция, която получава цяло число  като аргумент и отпечатва на конзолата, дали е четно или нечетно. Ако е четно отпечатайте "even", ако е 
нечетно "odd".*/

function oddOrEvene(input) {
    let num = Number(input[0]);
    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd')
    }
}

/*4. Познай паролата
Да се напише функция, която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе 
"Welcome". При несъвпадение да се изведе "Wrong password!". */

function password(input) {
    let pass = input[0];
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

/*5. Число от 100 до 200
Да се напише функция, която получава цяло число и проверява дали е под 100, между 100 и 200 или над 200. Ако числото е:
⦁	под 100 отпечатайте: "Less than 100"
⦁	между 100 и 200 отпечатайте: "Between 100 and 200"
⦁	над 200 отпечатайте: "Greater than 200"*/

function numbers100To200 (input) {
    let numInput = Number(input[0]);
    if (numInput < 100) {
        console.log("Less than 100");
    } else if ( 100 <= numInput && numInput <=200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

/*6. Информация за скоростта
Да се напише функция, която получава скорост (реално число) и отпечатва информация за скоростта. 
⦁	При скорост до 10 (включително) отпечатайте "slow"
⦁	При скорост над 10 и до 50 (включително) отпечатайте "average" 
⦁	При скорост над 50 и до 150 (включително) отпечатайте "fast"
⦁	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
⦁	При по-висока скорост отпечатайте "extremely fast"*/

function speedInfo(input) {
    let speed = Number(input[0]);
    if (speed <= 10) {
        console.log("slow");
    } if (speed > 10 && speed <= 50) {
        console.log("average");
    } if (speed > 50 && speed <= 150) {
        console.log("fast");
    } if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } if (speed > 1000) {
        console.log("extremely fast");
    } 
}

/*7. Лица на фигури
Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
⦁	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
⦁	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
⦁	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
⦁	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
Резултатът да се закръгли до 3 цифри след десетичната запетая.*/

function areaFigure(input) {
  let figure = input[0];
  let length = Number(input[1]);
  let width = Number(input[2]);
  if (figure == "square") {
    console.log((length * length).toFixed(3));
  } else if (figure == "rectangle") {
    console.log((length * width).toFixed(3));
  } else if (figure == "circle") {
    console.log((length * length * Math.PI).toFixed(3));
  } else if (figure == "triangle") {
    console.log(((length * width) / 2).toFixed(3));
  }
}
