/*1. Конзолна програма "Hello SoftUni"
Напишете функция, която отпечатва текста "Hello SoftUni".*/

function solve () {
    console.log("Hello SoftUni");
}

/*2. Числата от 1 до 10
Напишете функция, която отпечатва числата от 1 до 10 на отделни редове на конзолата.*/

function printNumber() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

/*3. Пресмятане на лице на квадрат
Да се напише функция, която получава цяло число и пресмята лицето на квадрат дадената страна.*/

function squareArea(input) {
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);
}

/*4. Конвертор: инчове към сантиметри
Да се напише функция, която чете от конзолата реално число и го преобразува от инчове в сантиметри. За
целта умножете инчовете по 2.54 (1 инч = 2.54 сантиметра).*/

function inchToCm(input) {
    let inch = Number(input[0]);
    let cm = 2.54 * inch;
    console.log(cm);
}

/*5. Поздрав по име
Напишете функция, която получава име на човек и отпечатва "Hello, <name>!", където <name> е
въведеното име от конзолата.*/

function helloByName(input) {
    let name = input;
    console.log(`Hello, ${name}!`);
}

/*6. Съединяване на текст и числа
Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид:
"You are <firstName> <lastName>, a <age>-years old person from <town>."*/

function concatenate(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

/*7. Изготвяне на проекти
Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви
проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
Вход
От конзолата се четат 2 реда:
1. Името на архитекта - текст
2. Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
© SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.
Follow us: Page 9 of 10
Изход
На конзолата се отпечатва:
• "The architect {името на архитекта} will need {необходими часове} hours to complete
{брой на проектите} project/s."*/

function archProject(input) {
    let name = input[0];
    let project = Number(input[1]);
    let hours = 3 * project;
    console.log(`The architect ${name} will need ${hours} hours to complete ${project} project/s.`)
}

/*8. Зоомагазин
Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки. Храната се
пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки
струва 4 лв.
Вход
От конзолата се четат 2 реда:
1. Броят на опаковките храна за кучета – цяло число в интервала [0… 100]
2. Броят на опаковките храна за котки – цяло число в интервала [0… 100]
Изход
На конзолата се отпечатва:
"{крайната сума} lv."*/

function petShop (input) {
    let dogPieces = input[0];
    let catPieces = input[1];
    let totalPrice = (2.5 * dogPieces) + (4 * catPieces);
    console.log(`${totalPrice} lv.`);
}

/*9. Озеленяване на дворове
Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, като
по този начин създаде уютна обстановка и комфорт на гостите си. За целта е наела фирма.
Напишете програма, която изчислява необходимате сума, които Божидара ще трябва да заплати на фирмата
изпълнител на проекта. Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям,
фирмата изпълнител предлага 18% отстъпка от крайната цена.
Вход
От конзолата се прочита само един ред:
1. Кв. метри, които ще бъдат озеленени – реално число в интервала [0.00 … 10000.00]
© SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.
Follow us: Page 10 of 10
Изход
На конзолата се отпечатват два реда:
• "The final price is: {крайна цена на услугата} lv."
• "The discount is: {отстъпка} lv."*/

function greeningHome(input) {
    let area = Number(input[0]);
    let fullPrice = 7.61 * area;
    let discount = 0.18 * fullPrice;
    let discountPrice = fullPrice - discount;
    console.log(`The final price is: ${discountPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
