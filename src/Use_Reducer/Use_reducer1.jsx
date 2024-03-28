import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const booksData = [
  { id: 1, name: "Rifat" },
  { id: 2, name: "Ranas" },
  { id: 3, name: "Julius" }
];

const CustomModel = ({ modelText }) => {
  return <p>{modelText}</p>
};

const reducer1 = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload]
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "Book is Remove",
    };
  }
  return state;
}



// this page main function. 
const Use_reducer1 = () => {


  const [bookState, dispatch] = useReducer(reducer1, {
    books: booksData,
    isModalOpen: false,
    modalText: '',
  });

  const [bookName, setBookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uuidv4.toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook })
    setBookName('');
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  };



  return (
    <>
      <h2>Use Reducer Practice.</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="book"
            value={bookName}
            placeholder="BookName"
            onChange={e => {
              setBookName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {bookState.isModalOpen && <CustomModel modalText={bookState.modalText} />}
      {bookState.books.map(book => {
        const { id, name } = book;
        return <li key={id}>
          {name} <button onClick={() => {
            removeBook(id)
          }}>Remove</button>
        </li>;
      })}
    </>
  );
}

export default Use_reducer1;

