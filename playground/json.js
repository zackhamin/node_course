const book = {
    title: 'Goblet of fire',
    author: 'Harry Putter'
}

const bookJson = JSON.stringify(book)
console.log(bookJson)

const bookParse = JSON.parse(bookJson)
console.log(bookParse)