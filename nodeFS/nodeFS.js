const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Zack!', () => {})

fs.appendFileSync('notes.txt', ' Just adding a note')