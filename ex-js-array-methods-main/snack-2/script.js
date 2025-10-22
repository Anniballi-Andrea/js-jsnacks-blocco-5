const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
/*for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(person.name)
}*/
people.forEach(element => {
   const personNames= element.name
  console.log(personNames)
});
// Risultato: 'Paolo', 'Giulia', 'Marco'