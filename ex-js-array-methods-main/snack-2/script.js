const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi


people.forEach(element => {
   const personNames= element.name
  console.log(personNames)
});
// Risultato: 'Paolo', 'Giulia', 'Marco'