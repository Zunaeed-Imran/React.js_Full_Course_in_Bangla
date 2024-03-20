// We Practice it by using useReducer()

import React, { useReducer, useState } from 'react';

const booksData = [
  { id: 1, name: 'Pather Pachall' },
  { id: 2, name: 'Padma Nadir Majhi' },
  { id: 3, name: '   Srikanta      ' },
];

const CustomModal = ({ modalText }) => {
  return <p>{modalText}</p>;
};


// reducer function
const reducer = (state, action) => {
  // action.type, action.payload
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload]
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "Book is Added"
    }
  }
  if (action.type === "REMOVE") {
    
  }
  return state;
};



// main function of this page...
const Use_Reducer2 = () => {


  // useReducer() fucntion
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: '',
  });

  const [bookName, setBookName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({type:"ADD", payload: newBook})
  };

  return (
    <>
      <h2>Book List 2</h2>
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
      {bookState.isModalOpen && <CustomModal modalText={bookState.modalText} />}
      {bookState.books.map(book => {
        // Distructuring
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </>
  );
};

export default Use_Reducer2;
