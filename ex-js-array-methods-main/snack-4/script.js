const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
/*let authorsBis =[]
for(let i = 0; i < posts.length; i++){
  const el = posts[i]
  authorsBis.push(el.author)

}
  
posts.forEach((el) => {
 console.log(el.author)
 authorsBis.push(el.author)

});
console.log(authorsBis)*/
const authors = posts.map((el)=> el.author)

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']
console.log(authors)