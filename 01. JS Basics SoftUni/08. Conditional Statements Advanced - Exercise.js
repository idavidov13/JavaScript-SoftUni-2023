/*1. Кино
В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
⦁	Premiere – премиерна прожекция, на цена 12.00 лева.
⦁	Normal – стандартна прожекция, на цена 7.50 лева.
⦁	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. 
Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  
Примерен вход и изход
вход	изход		вход	изход		вход	изход
(["Premiere", "10", "12"])	1440.00 leva	 	(["Normal", "21", "13"])	2047.50 leva	 	(["Discount", "12", "30"])	1800.00 leva
* Подсказка: използвайте прости проверки и елементарни изчисления. За да изведете резултата с точно 2 цифри след десетичната точка, използвайте toFixed(2)*/

function cinema(arr) {
    let type = arr[0];
    let length = Number(arr[1]);
    let width = Number(arr[2]);
    let places = length*width;
    switch (type) {
        case "Premiere": console.log((places*12).toFixed(2)); break;
        case "Normal": console.log((places*7.5).toFixed(2)); break;
        case "Discount": console.log((places*5).toFixed(2)); break;
    }
}

/*2. Лятно облекло
Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция,  която спрямо времето от денонощието и градусите да препоръча на 
Виктор какви дрехи да си облече. Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от 
таблицата.
Функцията получава два аргумента:
⦁	Градусите - цяло число в интервала [10…42]
⦁	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
Време от денонощието / градуси	
Morning	
Afternoon	
Evening
10 <= градуси <= 18	Outfit = Sweatshirt
Shoes = Sneakers	Outfit = Shirt
Shoes = Moccasins	Outfit = Shirt
Shoes = Moccasins
18 < градуси <= 24	Outfit = Shirt
Shoes = Moccasins	Outfit = T-Shirt
Shoes = Sandals	Outfit = Shirt
Shoes = Moccasins
градуси >= 25	Outfit = T-Shirt
Shoes = Sandals	Outfit = Swim Suit
Shoes = Barefoot	Outfit = Shirt
Shoes = Moccasins
Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {облекло} and {обувки}."
Примерен вход и изход
Вход	Изход	Обяснения
(["16", "Morning"])	It's 16 degrees, get your Sweatshirt and Sneakers.	Сутрин когато градусите са 16, Виктор си взима суичър и маратонки.
Вход	Изход	Вход	Изход
(["22", "Afternoon"])	It's 22 degrees, get your T-Shirt and Sandals.	(["28", "Evening"])	It's 28 degrees, get your Shirt and Moccasins.*/

function summerOutfit (arr) {
    let temp = Number(arr[0]);
    let dayPart = arr[1];
    if (temp >= 10 && temp <= 18){
        switch (dayPart) {
            case "Morning": console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`); break;
            case "Afternoon": console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`); break;
            case "Evening": console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if (temp > 18 && temp <= 24){
        switch (dayPart) {
            case "Morning": console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`); break;
            case "Afternoon": console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`); break;
            case "Evening": console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if (temp > 24) {
        switch (dayPart) {
            case "Morning": console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`); break;
            case "Afternoon": console.log(`It's ${temp} degrees, get your Swim Suit and Barefoot.`); break;
            case "Evening": console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`); break;
        }
    } 
}

/*3. Нов дом
Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва,
да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. 
цвете	Роза	Далия	Лале	Нарцис	Гладиола
Цена на брой в лева	5	3.80	2.80	3	2.50
Съществуват следните отстъпки:
⦁	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
⦁	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
⦁	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
⦁	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
⦁	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
Функцията получава 3 аргумента:
⦁	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
⦁	Брой цветя - цяло число в интервала [10…1000]
⦁	Бюджет - цяло число в интервала [50…2500]
Да се отпечата на конзолата на един ред:
⦁	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
⦁	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
Сумата да бъде форматирана до втория знак след десетичната запетая.
Примерен вход и изход
Вход	Изход	Обяснения
(["Roses", "55", "250"])	Not enough money, you need 25.00 leva more.	Нели иска 55 броя Рози. Цената на една роза е 5лв., следователно за 55 броя Нели ще трябва да 
плати: 55 * 5 = 275.
Тя обаче разполага с 250 лв. бюджет. 
Понеже 275 > 250 , то не и достигат 25 лв.
Вход	Изход	Вход	Изход
(["Tulips", "88", "260"])	Hey, you have a great garden with 88 Tulips and 50.56 leva left.	
(["Narcissus", "119", "360"])	Not enough money, you need 50.55 leva more.*/
 
function newHouse(arr) {
    let flowers = arr[0];
    let pieces = Number(arr[1]);
    let budget = Number(arr[2]);
    let price = 0;
    switch (flowers) {
        case "Roses" :
            if (pieces > 80) {
                price = ((pieces*5)*0.9).toFixed(2);
            } else {
                price = (pieces*5).toFixed(2);
            } break;
        case "Dahlias" :
            if (pieces > 90) {
                 price = ((pieces*3.8)*0.85).toFixed(2);
            } else {
                price = (pieces*3.8).toFixed(2);
            } break;
        case "Tulips" :
            if (pieces > 80) {
                 price = ((pieces*2.8)*0.85).toFixed(2);
            } else {
                price = (pieces*2.8).toFixed(2);
            } break;
        case "Narcissus" :
            if (pieces < 120) {
                price = ((pieces*3)*1.15).toFixed(2);
            } else {
                price = (pieces*3).toFixed(2);
            } break;
        case "Gladiolus" :
            if (pieces < 80) {
                price = ((pieces*2.5)*1.2).toFixed(2);
            } else {
                price = (pieces*2.5).toFixed(2);
            } break;
    }
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${pieces} ${flowers} and ${(budget-price).toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}

/*4. Лодка за риболов
Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба 
зависи от сезона и броя рибари.
Цената зависи от сезона:
⦁	Цената за наем на кораба през пролетта е  3000 лв.
⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
⦁	Цената за наем на кораба през зимата е  2600 лв.
В зависимост от броя си групата ползва отстъпка:
⦁	Ако групата е до 6 човека включително  –  отстъпка от 10%.
⦁	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
⦁	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
Вход
Приемат се 3 аргумента:
⦁	Бюджет на групата – цяло число в интервала [1…8000]
⦁	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
⦁	Брой рибари – цяло число в интервала [4…18]
Изход
Да се отпечата на конзолата един ред:
⦁	Ако бюджетът е достатъчен:
"Yes! You have {останалите пари} leva left."
⦁	Ако бюджетът НЕ Е достатъчен:
"Not enough money! You need {сумата, която не достига} leva."
Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
Примерен вход и изход
Вход	Изход	Обяснения
(["3000", "Summer", "11"])	Not enough money! You need 570.00 leva.	Лятото риболовния туризъм струва 4200 лв., 
11 рибари ползват 15% отстъпка -> 4200 - 15% = 3570 лв., нечетен брой са и не ползват допълнителна отстъпка. 
3000 <= 3570, следователно не им достигат 570.00 лв.
Вход	Изход	Вход	Изход
(["3600", "Autumn", "6"])	Not enough money! You need 180.00 leva.	(["2000", "Winter", "13"]) Yes! You have 50.00 leva left.*/

function fishingBoat(arr) {
    let budget = Number(arr[0]);
    let season = arr[1];
    let people = Number(arr[2]);
    let price = 0;

    switch (season) {
        case "Spring": price = 3000; break;
        case "Summer": price = 4200; break;
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600; break;
    }
    
    if (people <= 6) {
        price *= 0.9;
    } else if (people <=11) {
        price *=0.85;
    } else {
        price *=0.75;
    }

    if (season !== "Autumn" && people % 2 === 0) {
        price *= 0.95;
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

/*5. Пътешествие
Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон. Напишете функция, 
която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, 
независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета: 
⦁	При 100лв. или по-малко – някъде в България
⦁	Лято – 30% от бюджета
⦁	Зима – 70% от бюджета
⦁	При 1000лв. или по малко – някъде на Балканите
⦁	Лято – 40% от бюджета
⦁	Зима – 80% от бюджета
⦁	При повече от 1000лв. – някъде из Европа
⦁	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
Вход
Приемат се 2 аргумента :
⦁	Първи– Бюджет, реално число в интервала [10.00...5000.00].
⦁	Втори–  Един от двата възможни сезона: "summer" или "winter"
Изход
На конзолата трябва да се отпечатат два реда.
⦁	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
⦁	Втори ред – "{Вид почивка} – {Похарчена сума}"
⦁	Почивката може да е между "Camp" и "Hotel"
⦁	Сумата трябва да е закръглена с точност до вторият знак след запетаята.

Примерен вход и изход
вход	изход
(["50", "summer"]) Somewhere in Bulgaria Camp - 15.00
(["75", "winter"]) Somewhere in Bulgaria Hotel - 52.50
(["312", "summer"]) Somewhere in Balkans Camp - 124.80
(["678.53", "winter"]) Somewhere in Balkans Hotel - 542.82
(["1500", "summer"]) Somewhere in Europe Hotel - 1350.00*/

function journey (arr) {

    let budget = Number(arr[0]);
    let season = (arr[1]);

/* Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета:
• При 100лв. или по-малко – някъде в България
o Лято – 30% от бюджета
o Зима – 70% от бюджета
• При 1000лв. или по малко – някъде на Балканите
o Лято – 40% от бюджета
o Зима – 80% от бюджета
• При повече от 1000лв. – някъде из Европа
o При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета. */

switch (season) {
    case "summer":
        if (budget <= 100) {
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${(budget*0.3).toFixed(2)}`);
        } else if (budget <=1000) {
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${(budget*0.4).toFixed(2)}`);
        } else if (budget > 1000) {
            console.log("Somewhere in Europe");
            console.log(`Hotel - ${(budget*0.9).toFixed(2)}`);
        }
        break;
    
    case "winter":
        if (budget <= 100) {
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${(budget*0.7).toFixed(2)}`);
        } else if (budget <=1000) {
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${(budget*0.8).toFixed(2)}`);
        } else if (budget > 1000) {
            console.log("Somewhere in Europe");
            console.log(`Hotel - ${(budget*0.9).toFixed(2)}`);
        }
        break;
  }
}
/*6.	Операции между числа
Напишете функция, която получава  две цели числа (N1 и N2) и оператор, с който да се извърши дадена математическа операция с тях. Възможните операции са: 
Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%). При събиране, изваждане и умножение на конзолата трябва да се отпечатат 
резултата и дали той е четен или нечетен. При обикновеното деление – резултата. При модулното деление – остатъка. Трябва да се има предвид, че делителят 
може да е равен на 0(нула), а на нула не се дели. В този случай трябва да се отпечата специално съобщениe.
Вход
Приемат се 3 аргумента,:
⦁	N1 – цяло число в интервала [0...40 000]
⦁	N2 – цяло число в интервала [0...40 000]
⦁	Оператор – един символ измежду: "+", "-", "*", "/", "%"
Изход
Да се отпечата на конзолата един ред:
⦁	Ако операцията е събиране, изваждане или умножение:
⦁	 "{N1} {оператор} {N2} = {резултат} – {even/odd}"
⦁	Ако операцията е деление:
⦁	"{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
⦁	Ако операцията е модулно деление: 
⦁	"{N1} % {N2} = {остатък}"
⦁	В случай на деление с 0(нула): 
⦁	"Cannot divide {N1} by zero"

Примерен вход и изход
вход	изход	вход	изход	вход	изход
(["10", "12", "+"])	10 + 12 = 22 - even	
(["123", "12", "/"])	123 / 12 = 10.25	
(["112", "0", "/"])	Cannot divide 112 by zero
(["10", "1", "-"])	10 – 1 = 9 - odd	
(["10", "3", "%"])	10 % 3 = 1	
(["10", "0", "%"])	Cannot divide 10 by zero
(["7", "3", "*"])	7 * 3 = 21 - odd*/

function operator(arr) {
    let numOne = Number(arr[0]);
    let numTwo = Number(arr[1]);
    let operation = (arr[2]);
    let result = 0;

    if (operation === "+") {
        if (((numOne + numTwo) % 2) === 0) {
            result = numOne + numTwo;
            console.log(`${numOne} ${operation} ${numTwo} = ${result} - even`)
        } else {
            result = numOne + numTwo;
            console.log(`${numOne} ${operation} ${numTwo} = ${result} - odd`)
        }
    }

    if (operation === "-") {
        if ((numOne - numTwo) % 2 === 0) {
            result = numOne - numTwo;
            console.log(`${numOne} ${operation} ${numTwo} = ${result} - even`)
        } else {
            result = numOne - numTwo;
            console.log(`${numOne} ${operation} ${numTwo} = ${result} - odd`)
        }
    }

    if (operation === "*") {
            if ((numOne * numTwo) % 2 === 0) {
                result = numOne * numTwo;
                console.log(`${numOne} ${operation} ${numTwo} = ${result} - even`)
            } else {
                result = numOne * numTwo;
                console.log(`${numOne} ${operation} ${numTwo} = ${result} - odd`)
            }
        }

    if (operation === "/" && numTwo !== 0) {
        result = (numOne / numTwo).toFixed(2)
        console.log(`${numOne} / ${numTwo} = ${result}`);
    } else if (operation === "/" && numTwo === 0) {
        console.log(`Cannot divide ${numOne} by zero`);
    }

    if (operation === "%" && numTwo !== 0) {
        result = numOne % numTwo
        console.log(`${numOne} % ${numTwo} = ${result}`);
    } else if (operation === "%" && numTwo === 0) {
        console.log(`Cannot divide ${numOne} by zero`);
    }
}

/*7. Хотелска стая
Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. Цените зависят от месеца 
на престоя:
Май и октомври	Юни и септември	Юли и август
Студио – 50 лв./нощувка	Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
Предлагат се и следните отстъпки:
⦁	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
⦁	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
⦁	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
⦁	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
Вход
Получават се 2 аргумента:
⦁	 месецът – May, June, July, August, September или October
⦁	броят на нощувките – цяло число в интервала [0 … 200]
Изход
Да се отпечатат на конзолата 2 реда:
⦁	На първия ред: “Apartment: {цена за целият престой} lv.”
⦁	На втория ред: “Studio: {цена за целият престой} lv.”
Цената за целия престой форматирана с точност до два знака след десетичната запетая.
Примерен вход и изход
Вход	Изход	Обяснения
(["May",
"15"])	Apartment: 877.50 lv.
Studio: 525.00 lv.	През май, при повече от 14 нощувки, намаляваме цената на студиото с 30% (50 – 15 = 35), а на апартамента – с 10% (65 – 6.5 =58.5).
Целият престой в апартамент – 877.50 лв.
Целият престой в студио – 525.00 лв.
Вход	Изход	Вход	Изход
(["June", "14"])	Apartment: 961.80 lv. Studio: 1052.80 lv.	
(["August", "20"])	Apartment: 1386.00 lv. Studio: 1520.00 lv.*/

function hotelRoom(arr) {
    let month = arr[0];
    let nights = Number(arr[1]);
    let priceStudio = 0;
    let priceApp = 0;


    switch (month) {
        case "May" : priceStudio = 50; priceApp = 65; break;
        case "October" : priceStudio = 50; priceApp = 65; break;
        case "June" : priceStudio = 75.2; priceApp = 68.7; break;
        case "September" : priceStudio = 75.2; priceApp = 68.7; break;
        case "July" : priceStudio = 76; priceApp = 77; break;
        case "August" : priceStudio = 76; priceApp = 77; break;
    }

    if (nights > 7 && nights <= 14 && (month === "May" || month === "October")) {
        priceStudio *= 0.95;
    } else if (nights > 14 && (month === "May" || month === "October")) {
        priceStudio *=0.7;
    }else if (nights > 14 && (month === "June" || month === "September")) {
        priceStudio *=0.8;
    }

    if (nights > 14) {
        priceApp *= 0.9;
    }

    console.log(`Apartment: ${(priceApp*nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio*nights).toFixed(2)} lv.`);
}

/*8. Навреме за изпит
Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната зала в даден час на пристигане (например 9:40). Счита се, че 
студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. 
Ако е дошъл след часа на изпита, той е закъснял. Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл 
навреме, дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
Вход
Приемат се 4 аргумента:
⦁	Първият съдържа час на изпита – цяло число от 0 до 23.
⦁	Вторият съдържа минута на изпита – цяло число от 0 до 59.
⦁	Третият съдържа час на пристигане – цяло число от 0 до 23.
⦁	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
Изход
На първият ред отпечатайте:
⦁	"Late", ако студентът пристига по-късно от часа на изпита.
⦁	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
⦁	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
⦁	"mm minutes before the start" за идване по-рано с по-малко от 1.
⦁	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
⦁	 "mm minutes after the start" за закъснение под час.
⦁	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

Примерен вход и изход
Вход	Изход		Вход	Изход		Вход	Изход
(["9", "30", "9", "50"])	Late 20 minutes after the start	 	
(["9", "00", "10", "30"])	Late 1:30 hours after the start	 	
(["10", "00", "10", "00"])	On time
(["9", "00", "8", "30"])	On time 30 minutes before the start		
(["14", "00", "13", "55"])	On time 5 minutes before the start	 	
(["11", "30", "10", "55"])	Early 35 minutes before the start
(["16", "00", "15", "00"])	Early 1:00 hours before the start		
(["11", "30", "8", "12"])	Early 3:18 hours before the start	 	
(["11", "30", "12", "29"])	Late 59 minutes after the start*/

function oneTime(arr) {
    let examHour = Number(arr[0]);
    let examMinute = Number(arr[1]);
    let ariveHour = Number(arr[2]);
    let ariveMinute = Number(arr[3]);
    let examTime = examHour * 60 + examMinute;
    let ariveTime = ariveHour * 60 + ariveMinute;

    if (examTime === ariveTime) {
        console.log("On time");
    } else if (examTime > ariveTime && examTime <= ariveTime + 30) {
        console.log("On time");
        console.log(`${examTime - ariveTime} minutes before the start`);
    } else if (ariveTime > examTime && ariveTime - 59 <= examTime) {
        console.log("Late");
        console.log(`${ariveTime - examTime} minutes after the start`);
    } else if (ariveTime + 30 < examTime && ariveTime + 59 >= examTime) {
        console.log("Early");
        console.log(`${examTime - ariveTime} minutes before the start`)
    } else if (ariveTime + 59 < examTime) {
        if ((examTime-ariveTime)%60 < 10) {
        console.log("Early");
        console.log(`${Math.floor((examTime - ariveTime)/60)}:0${(examTime-ariveTime)%60} hours before the start`)
        } else {
        console.log("Early");
        console.log(`${Math.floor((examTime - ariveTime)/60)}:${(examTime-ariveTime)%60} hours before the start`) 
        }
    } else if (ariveTime - 59 > examTime) {
        if ((ariveTime - examTime)%60 < 10) {
        console.log("Late");
        console.log(`${Math.floor((ariveTime - examTime)/60)}:0${(ariveTime - examTime)%60} hours after the start`)
        } else {
        console.log("Late");
        console.log(`${Math.floor((ariveTime - examTime)/60)}:${(ariveTime - examTime)%60} hours after the start`)    
        }
    }
}


/*9. Ски почивка
Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя. 
Налични са следните видове помещения, със следните цени за престой:
⦁	"room for one person" – 18.00 лв за нощувка
⦁	"apartment" – 25.00 лв за нощувка 
⦁	"president apartment" – 35.00 лв за нощувка
Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно 
намаление. 
Намаленията са както следва:
вид помещение	по-малко от 10 дни	между 10 и 15 дни	повече от 15 дни
room for one person	не ползва намаление	не ползва намаление	не ползва намаление
apartment	30% от крайната цена	35% от крайната цена	50% от крайната цена
president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена
След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . Ако оценката му е позитивна, към цената с 
вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.
Вход
Входът се чете от конзолата и се състои от три реда:
⦁	Първи ред - дни за престой - цяло число в интервала [0...365]
⦁	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
⦁	Трети ред - оценка - "positive"  или "negative"
Изход
На конзолата трябва да се отпечата един ред:
⦁	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.
Примерен вход и изход
Вход	Изход	Обяснения
(["14", "apartment", "positive"])	264.06	14 дни => 13 нощувки => 13 * 25.00 = 325 лв.
10 < 13 дни < 15 => 325 – 35%= 211.25 лв.
Оценката е positive => 211.25 + 25% = 264.0625 -> 264.06 лв.
Вход	Изход	Вход	Изход	Вход	Изход
(["30", "president apartment", "negative"])	730.80	
(["12", "room for one person", "positive"])	247.50	
(["2", "apartment", "positive"])	21.88*/

function skiTrip(arr) {
    let days = Number(arr[0]);
    let room = (arr[1]);
    let mark = (arr[2]);
    let nights = days - 1;
    let price = 0;

    switch (room) {
        case "room for one person": price = 18; break;
        case "apartment": price = 25; break;
        case "president apartment": price = 35; break;
    }

    if (nights < 10 && room === "apartment") {
        price *= 0.7;
    } else if (nights >= 10 && nights <= 15 && room === "apartment") {
        price *= 0.65;
    } else if (nights > 15 && room === "apartment") {
        price *= 0.5;
    } else if (nights < 10 && room === "president apartment") {
        price *= 0.9;
    } else if (nights >= 10 && nights <= 15 && room === "president apartment") {
        price *= 0.85;
    } else if (nights > 15 && room === "president apartment") {
        price *= 0.8;
    }

    switch (mark) {
        case "positive": price *=1.25; break;
        case "negative": price *=0.9; break;
    }
    console.log((price*nights).toFixed(2));
}
