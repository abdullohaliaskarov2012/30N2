let numbers = [12, 7, 5, 8, 10, 3, 4, 9, 6, 11];

let juftlar = [];
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num % 2 === 0) {
        juftlar.push(num);
    } else {
        console.log(' ')
    }
}

console.log("juftlar 2:", juftlar);