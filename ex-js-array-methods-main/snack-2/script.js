const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi


const personNames= people.map((person) => ` ${person.name}` )
console.log(personNames.toString())
// Risultato: 'Paolo', 'Giulia', 'Marco'