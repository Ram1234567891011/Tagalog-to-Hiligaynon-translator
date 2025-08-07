const express = require('express');
const cors = require('cors');
const dictionary = require('../data/dictionary.json');

const app = express();
app.use(cors());

app.get('/api/define', (req, res) => {
  const word = req.query.word?.toLowerCase();
  if (!word) {
    return res.status(400).json({ error: 'No word provided' });
  }

  const meaning = dictionary[word];
  if (meaning) {
    res.json({ word, meaning });
  } else {
    res.json({ word, meaning: 'Not found in dictionary' });
  }
});

module.exports = app;
