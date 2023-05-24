/*1. Ден от седмицата
Напишете функция, която получава цяло число и отпечатва ден от седмицата (на английски език), в граници [1...7] или отпечатва "Error" в случай, че въведеното число е невалидно. 
Примерен вход и изход
Вход	Изход
(["1"])	Monday
(["2"])	Tuesday
(["3"])	Wednesday
(["4"])	Thursday
(["5"])	Friday
(["6"])	Saturday
(["7"])	Sunday
(["-1"])	Error*/

function dayOfWeek(input) {
    let day = Number(input[0]);
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break
    }
}

/*2. Почивен или работен ден
Напишете функция която, чете ден от седмицата (текст), на английски език - въведен от потребителя. Ако денят е работен отпечатва на конзолата - "Working day", ако е почивен - "Weekend". Ако се въведе текст различен от ден от седмицата да се отпечата - "Error".
Примерен вход и изход
Вход	Изход
(["Monday"])	Working day
Вход	Изход
(["Sunday"])	Weekend
Вход	Изход
(["April"])	Error*/

function dayOfWeek(input) {
    let day = input[0];
    switch (day) {
        case "Monday":
            console.log("Working day");
            break;
        case "Tuesday":
            console.log("Working day");
            break;
        case "Wednesday":
            console.log("Working day");
            break;
        case "Thursday":
            console.log("Working day");
            break;
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
            console.log("Weekend");
            break;
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break
    }
}

/*3. Клас животно
Напишете функция, която отпечатва класа на животното според неговото име, въведено от потребителя.
⦁	dog -> mammal
⦁	crocodile, tortoise, snake -> reptile
⦁	others -> unknown
Примерен вход и изход
Вход	Изход
(["dog"])	mammal
(["snake"])	reptile
(["cat"])	unknown*/

function aaa(input) {
    let animal = input[0];
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
            console.log("reptile");
            break;
        case "tortoise":
            console.log("reptile");
            break;
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown")
    }
}

/*4. Обръщение според възраст и пол
Да се напише функция, която получава възраст (реално число) и пол ('m' или 'f'), въведени от потребителя, и отпечатва обръщение измежду следните:
⦁	"Mr." – мъж (пол 'm') на 16 или повече години
⦁	"Master" – момче (пол 'm') под 16 години
⦁	"Ms." – жена (пол 'f') на 16 или повече години
⦁	"Miss" – момиче (пол 'f') под 16 години
Примерен вход и изход
    вход	изход		         вход	изход		        вход	изход		        вход	изход
(["12","f"])	Miss	 	(["17","m"])	Mr.	 	(["25","f"])	Ms.	 	(["13.5","m"])	Master*/

function personalTitle(input) {
    let age = Number(input[0]);
    let gender = input[1];
    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
    } } else {
        if (age >= 16) {
             console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

/*5. Квартално магазинче
Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
град / продукт	coffee	water	beer	sweets	peanuts
Sofia	0.50	0.80	1.20	1.45	1.60
Plovdiv	0.40	0.70	1.15	1.30	1.50
Varna	0.45	0.70	1.10	1.35	1.55
Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 
Примерен вход и изход
вход	изход	
(["coffee",
"Varna",
"2"])	0.9	 	(["peanuts",
"Plovdiv",
"1"])	1.5	 	(["beer",
"Sofia",
"6"])	7.2	 	(["water",
"Plovdiv",
"3"])	2.1	 	(["sweets",
"Sofia",
"2.23"])	3.2335*/

function smallShop (input) {
    let product = input[0];
    let town = input[1];
    let pieces = Number(input[2]);

    switch (town){
        case "Sofia":
            switch(product) {
                case "coffee":
                    console.log(0.5*pieces);
                    break;
                case "water":
                    console.log(0.8*pieces);
                    break;
                case "beer":
                    console.log(1.2*pieces);
                    break;
                case "sweets":
                    console.log(1.45*pieces);
                    break;
                case "peanuts":
                    console.log(1.6*pieces);
                    break;
            }
            break;
        case "Plovdiv":
            switch(product) {
                case "coffee":
                    console.log(0.4*pieces);
                    break;
                case "water":
                    console.log(0.7*pieces);
                    break;
                case "beer":
                    console.log(1.15*pieces);
                    break;
                case "sweets":
                    console.log(1.3*pieces);
                    break;
                case "peanuts":
                    console.log(1.5*pieces);
                    break;
            }
            break;
        case "Varna":
            switch(product) {
                case "coffee":
                    console.log(0.45*pieces);
                    break;
                case "water":
                    console.log(0.7*pieces);
                    break;
                case "beer":
                    console.log(1.1*pieces);
                    break;
                case "sweets":
                    console.log(1.35*pieces);
                    break;
                case "peanuts":
                    console.log(1.55*pieces);
                    break;
            }
            break;
    }
}

/*6. Число в интервалa
Да се напише функция, която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е различно от 0 и извежда "Yes", ако отговаря на 
условията, или "No" ако е извън тях.
Примерен вход и изход
вход	изход		вход	изход		вход	изход
(["-25"])	Yes	 	(["0"])	No	 	(["25"])	Yes*/

function numberInRange (input) {
    let number = Number(input[0]);
    if (number >= -100 && number <=100 && number !=0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

/*7. Работно време
Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително.
Примерен вход и изход
вход	изход		вход	изход	 	вход	изход
(["11",
"Monday"])	open	 	(["19",
"Friday"])	closed	 	(["11",
"Sunday"])	closed*/

function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
    if (hour >= 10 && hour <=18) {
        if (day === "Sunday") {
            console.log("closed");
        } else {
            console.log("open");
        }

    } else {
        console.log("closed");
    }
}

/*8. Билет за кино
Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на билет за кино според деня от седмицата:
Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
12	12	14	14	12	16	16

Примерен вход и изход
вход	изход		вход	изход	 	вход	изход
(["Monday"])	12	 	(["Friday"])	12	 	(["Sunday"])	16*/

function price(input) {
    let day = input[0];
    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        console.log(12);
    } else if (day == "Wednesday" || day == "Thursday") {
        console.log(14);
    } else {
        console.log(16);
    }
}

/*9. Плод или зеленчук
Да се напише функция, която получава аргумент  име на продукт  и проверява дали е плод или зеленчук.
⦁	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
⦁	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
⦁	Всички останали са "unknown"
Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт.
Примерен вход и изход
вход	изход		вход	изход		вход	изход		вход	изход
(["banana"])	fruit	 	(["apple"])	fruit	 	(["tomato"])	vegetable	 	(["water"])	unknown*/

function fruitOrNot (input) {
    let item = input[0];
    switch (item) {
        case "banana":
            console.log("fruit");
            break;
        case "apple":
            console.log("fruit");
            break;
        case "kiwi":
            console.log("fruit");
            break;
        case "cherry":
            console.log("fruit");
            break;
        case "lemon":
            console.log("fruit");
            break;
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
            console.log("vegetable");
            break;
        case "cucumber":
            console.log("vegetable");
            break;
        case "pepper":
            console.log("vegetable");
            break;
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}

/*10. Невалидно число
Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 
Примерен вход и изход
вход	изход		вход	изход		вход	изход		вход	изход
(["75"])	invalid	 	(["150"])	(няма изход)	 	(["220"])	invalid	 	(["199"])	(няма изход)

вход	изход		вход	изход		вход	изход		вход	изход
(["-1"])	invalid	 	(["100"])	(няма изход)	 	(["200"])	(няма изход)	 	(["0"])	(няма изход)*/

function invalidNumber(input) {
    let num = Number(input[0]);
    let flag = true;
    if (num >= 100 && num <=200 || num === 0) {
    } else {
        console.log("invalid");
    }
}

/*11. Магазин за плодове
Магазин за плодове през работните дни работи на следните цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
Събота и неделя магазинът работи на по-високи цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 

Примерен вход и изход
вход	изход		вход	изход		вход	изход		вход	изход		вход	изход
(["apple",
"Tuesday",
"2"])	2.40	 	(["orange",
"Sunday",
"3"])	2.70	 	(["kiwi",
"Monday",
"2.5"])	6.75	 	(["grapes",
"Saturday",
"0.5"])	2.10	 	(["tomato",
"Monday",
"0.5"])	error*/

function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let pieces = Number(input[2]);
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana" : console.log((2.5*pieces).toFixed(2)); break;
            case "apple" : console.log((1.2*pieces).toFixed(2)); break;
            case "orange" : console.log((0.85*pieces).toFixed(2)); break;
            case "grapefruit" : console.log((1.45*pieces).toFixed(2)); break;
            case "kiwi" : console.log((2.7*pieces).toFixed(2)); break;
            case "pineapple" : console.log((5.5*pieces).toFixed(2)); break;
            case "grapes" : console.log((3.85*pieces).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana" : console.log((2.7*pieces).toFixed(2)); break;
            case "apple" : console.log((1.25*pieces).toFixed(2)); break;
            case "orange" : console.log((0.9*pieces).toFixed(2)); break;
            case "grapefruit" : console.log((1.6*pieces).toFixed(2)); break;
            case "kiwi" : console.log((3*pieces).toFixed(2)); break;
            case "pineapple" : console.log((5.6*pieces).toFixed(2)); break;
            case "grapes" : console.log((4.2*pieces).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
} 

/*12. Търговски комисионни
Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
Sofia	5%	7%	8%	12%
Varna	4.5%	7.5%	10%	13%
Plovdiv	5.5%	8%	12%	14.5%
Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
Примерен вход и изход
вход	изход		вход	изход		вход	изход		вход	изход
(["Sofia",
"1500"])	120.00	 	(["Plovdiv",
"499.99"])	27.50	 	(["Varna",
"3874.50"])	387.45	 	(["Kaspichan",
"-50"])	error*/

function tradeCommission(input) {
    let town = input[0];
    let volume = Number(input[1]);
    if (volume >= 0 && volume <= 500) {
        switch (town) {
            case "Sofia" : console.log((volume*0.05).toFixed(2)); break;
            case "Varna" : console.log((volume*0.045).toFixed(2)); break;
            case "Plovdiv" : console.log((volume*0.055).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (volume > 500 && volume <= 1000) {
        switch (town) {
            case "Sofia" : console.log((volume*0.07).toFixed(2)); break;
            case "Varna" : console.log((volume*0.075).toFixed(2)); break;
            case "Plovdiv" : console.log((volume*0.08).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }   else if (volume > 1000 && volume <= 10000) {
        switch (town) {
            case "Sofia" : console.log((volume*0.08).toFixed(2)); break;
            case "Varna" : console.log((volume*0.1).toFixed(2)); break;
            case "Plovdiv" : console.log((volume*0.12).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (volume > 10000) {
        switch (town) {
            case "Sofia" : console.log((volume*0.12).toFixed(2)); break;
            case "Varna" : console.log((volume*0.13).toFixed(2)); break;
            case "Plovdiv" : console.log((volume*0.145).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}
