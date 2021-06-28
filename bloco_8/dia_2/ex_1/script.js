const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//Ex1
function authorBornIn1947() {
    return books.find((book) => book.author.birthYear === 1947).author.name;
}
  console.log(authorBornIn1947());
  assert.strictEqual(authorBornIn1947(), 'Stephen King');
 
//Ex2
function smallerName() {
    let nameBook = books[0].name;
    books.forEach((book) => {
        if (nameBook.length > book.name.length) {
            nameBook = book.name
        }
    });
  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
  console.log(smallerName())
  assert.strictEqual(smallerName(), 'Duna');

  //Ex3
  const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook() {
    return books.find((book) => book.name.length === 26);
  }
  console.log(getNamedBook(books))
  assert.deepStrictEqual(getNamedBook(), expectedResult);

  //Ex4
  const expectedResult = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  
  function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => b.releaseYear - a.releaseYear);
  }
  
  assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

//Ex5
  const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.birthYear > 1901 && book.birthYear < 2001);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

//Ex6
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

//Ex7
const expectedResult = false;

function authorUnique() {
  return books.some((a, b) => a.birthYear - b.birthYear)
}
assert.strictEqual(authorUnique(), expectedResult);