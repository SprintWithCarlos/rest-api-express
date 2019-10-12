const data = [
  {
    id: 0, title: 'La Biblioteca de Babel', author: 'Jorge Luis Borges', year: 1941,
  },
  {
    id: 1, title: 'Sobre Héroes y Tumbas', author: 'Ernesto Sábato', year: 1948,
  },
  {
    id: 3, title: 'El nombre de la rosa', author: 'Umberto Eco', year: 1980,
  },
];

// CRUD
function readAllBooks() {
  console.log(data);
}
readAllBooks();
// CREATE
function createOneBook(title, author, year) {
  const id = data.length + 1;
  const book = {
    id, title, author, year,
  };
  return data.push(book);
}
createOneBook('El libro de la jungla', 'Rudyaard Kipling', 1894);
readAllBooks();
// UPDATE
function changeOneBook(id, title, author, year) {
  const updatedBook = data.find((book) => book.id === id);
  updatedBook.id = id;
  updatedBook.title = title;
  updatedBook.author = author;
  updatedBook.year = year;
}
changeOneBook(4, 'El libro de la Selva', 'Rudyaard Kipling', 1982);
readAllBooks();
// DELETE
function deleteOneBook(id) {
  const index = data.indexOf(id);
  return data.splice(index, 1);
}
deleteOneBook(4);
readAllBooks();
