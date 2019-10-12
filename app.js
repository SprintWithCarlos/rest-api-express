const express = require('express');

const app = express();

app.use(express.json());
const data = [
  {
    id: 0,
    title: 'La Biblioteca de Babel',
    author: 'Jorge Luis Borges',
    year: 1941,
  },
  {
    id: 1,
    title: 'Sobre Héroes y Tumbas',
    author: 'Ernesto Sábato',
    year: 1948,
  },
  {
    id: 3,
    title: 'El nombre de la rosa',
    author: 'Umberto Eco',
    year: 1980,
  },
];
// CRUD HTTP
// READ
app.get('/books', (req, res) => {
  res.send(data);
});
// CREATE
app.post('/books', (req, res) => {
  const id = data.length + 1;
  const book = {
    id,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  };
  data.push(book);
  return res.status(201).send('Book Created!');
});

// UPDATE
app.put('/books/:id', (req, res) => {
  const updatedBook = data.find((book) => book.id == req.params.id);
  updatedBook.id = req.params.id;
  updatedBook.title = req.body.title;
  updatedBook.author = req.body.author;
  updatedBook.year = req.body.year;
  res.status(204).send();
});
// DELETE
app.delete('/books/:id', (req, res) => {
  const index = data.indexOf(req.params.id);
  data.splice(index, 1);
  res.status(204).send();
});
app.listen(3000, () => console.log('Listening on port 3000'));
