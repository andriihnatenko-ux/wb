let a = 10;
let b = 5;

console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);



let firstName = "Іван";
let lastName = "Іванов";

let fullName = firstName + " " + lastName;

console.log("Привіт, " + fullName + "!");


// Завдання 3: Умовний оператор
let age = 20;

if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}


// Завдання 4: Цикл for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Завдання 5: Функції
function square(number) {
    return number * number;
}

console.log("Квадрат числа 5:", square(5));


// Завдання 6: Робота з масивами
let fruits = ["яблуко", "банан", "апельсин"];

fruits.push("груша");

console.log("Масив фруктів:", fruits);