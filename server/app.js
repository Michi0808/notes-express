const express = require('express');
const path = require('path');
const { getNotesHandler, postNotesHandler, deleteNotesHandler} = require('./controllers/notesController');

const app = express();
const port = 3000;