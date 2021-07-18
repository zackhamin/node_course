const fs = require('fs')
// const book = {
//     title: 'Goblet of fire',
//     author: 'Harry Putter'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('bookjson.json',bookJson)

// const dataBuffer = fs.readFileSync('bookjson.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

const dataBuffer = fs.readFileSync('bookjson.jsonc')
const dataJSON = dataBuffer.toString()
const changedData = JSON.parse(dataJSON)
changedData.name = "Zack"
changedData.age = 1352
const newObject = JSON.stringify(changedData)
fs.writeFileSync('bookjson.jsonc',newObject)

console.log(changedData)