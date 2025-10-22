const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
let numberPlus = []

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    let elementPlus = element + 1
    numberPlus.push(elementPlus)
}

/*numbers.forEach(element => {
    let elementPlus = element + 1
    numberPlus.push(elementPlus)
    
});*/
console.log (numberPlus)

const newNunbers = numbers.map((el)=> el +1)
    
// Risultato: [3, 9, 5, 8, 3, 88]
console.log(newNunbers)

