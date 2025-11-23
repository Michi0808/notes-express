const { getNotes, addNotes, deleteNotes } = require('../models/notes');

function getNotesHandler (req, res) {
  const notes = getNotes();
  res.json(notes);
}

function postNotesHandler (req, res) {
  addNotes(req.body);
  res.sendStatus(201);
}

function deleteNotesHandler (req, res) {

}

module.exports = { getNotesHandler, postNotesHandler, deleteNotesHandler};