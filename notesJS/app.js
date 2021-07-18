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
    handler(argv){
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
    handler(argv){
      notes.removeNote(argv.title)
    },
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(argv){
       notes.listNotes()
    },
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title ',
            type: 'string'
        },
    },
    handler(argv){
        notes.readNotes(argv.title)
    },
})

yargs.parse()
