const getNotes = require('./notes.js')
const yargs = require('yargs')

// const command = process.argv[2]

console.log(process.argv)


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log("New note added")
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removed note',
    handler: function() {
        console.log('Removing notes')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('All notes listed')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Here\'s your note')
    }
})

console.log(yargs.argv)

// if (command === "add") {
//     console.log('Adding note..')
// } else if (command === 'remove'){
//     console.log('Removing note')
// }