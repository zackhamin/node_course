const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title,body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
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

const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesList = notes.filter(function (note) {
        return note.title !== title
    })
    saveNotes(notesList)
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e) {
        return []
    }
}

module.exports = { getNotes, addNotes, removeNote}