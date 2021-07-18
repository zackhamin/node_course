const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNotes =  (title,body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) =>  note.title === title
    // )
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log("New note added ")
    } else {
        console.log("Duplicate note title")
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesList = notes.filter((note) => note.title !== title
    )
    saveNotes(notesList)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    return notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) => {
    try {
        const notes = loadNotes()
        const noteFound = notes.find((note) => note.title === title)
        if (noteFound) {
            console.log(noteFound)
        } else {
            console.log("No note found.")
        }
    } catch(e){
        console.log("No note found")
    }
}

module.exports = { getNotes, addNotes, removeNote, listNotes, readNotes}