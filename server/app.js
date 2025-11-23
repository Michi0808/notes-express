const express = require('express');
const path = require('path');
const { getNotesHandler, postNotesHandler, deleteNotesHandler} = require('./controllers/notesController');

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log('>>>', req.method, req.url);
  console.log('  headers content-type:', req.headers['content-type']);
  console.log('  raw body?', req.body);
  next();
});

app.post('/notes', postNotesHandler);
app.get('/notes', getNotesHandler);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});