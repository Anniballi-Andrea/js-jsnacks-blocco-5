const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const even = nums.filter((n) => (n % 2 === 0))

// Risultato: [2, 8, 4, 12]
console.log(even)