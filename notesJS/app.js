const notes = require('./notes.js')
const yargs = require('yargs')

// const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title ',
            type: 'string'
        },
        body: {
            describe: 'body',
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removed note',
    builder: {
        title: {
            describe: 'Note title ',
            type: 'string',
            demandOption: true,
        },
    },
    handler: function(argv) {
       notes.removeNote(argv.title)
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

yargs.parse()
