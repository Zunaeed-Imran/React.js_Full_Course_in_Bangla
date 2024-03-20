// we practice it by using useState not use Reducer. for Example.

import React, { useState } from 'react';

const booksData = [
  { id: 1, name: 'Pather Pachall' },
  { id: 2, name: 'Padma Nadir Majhi' },
  { id: 3, name: '   Srikanta      ' },
];

const CustomModal = ({modalText}) => {
  return <p>{modalText}</p>;
};

const Use_reducer = () => {
  const [books, setBooks] = useState(booksData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [bookName, setBookName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setBooks(prevState => {
      const newBook = { id: new Date().getTime().toString(), name: bookName };
      return [...prevState, newBook];
    });
    setIsModalOpen(true);
    setModalText('Book is Added.');
  };

  return (
    <>
      <h2>Book List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name=""
            value={bookName}
            onChange={e => {
              setBookName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {isModalOpen && <CustomModal modalText={modalText} />}
      {books.map(book => {
        // Distructuring
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
      
    </>
  );
};

export default Use_reducer;
