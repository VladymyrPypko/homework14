const userNumbers = [
    a = +prompt('Enter your fisrt number'),
    b = +prompt('Enter your second number'),
    c = +prompt('Enter your Third number')
];

const userAverage = (numbers) => { 
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum / numbers.length;
};

alert(parseInt(userAverage(userNumbers)));