const db = { notes: [] };

let nextId = 1;

function getNotes () {
  return db.notes;
}

function addNotes (text) {

  const note = {
    id: nextId++,
    text,
    createdTime: Date.now()
  };

  db.notes.push(note);
  return note;
}

function deleteNotes () {

}

module.exports = { getNotes, addNotes, deleteNotes };