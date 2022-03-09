import React, { useState, useEffect } from "react";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    res();
  }, []);

  const res = async () => {
    await axios.get(`http://localhost:5000/getAuthor`).then((result) => {
      setBooks(result.data);
      console.log(result.data);
    });
  };

  return (
    <div>
      {books.map((e) => {
        return (
          <>
            <h1>name:{e.name}</h1>
            <p>age:{e.age}</p>
            <p>image:{e.image}</p>
            <p>gender:{e.gender}</p>
            {e.books.map((b) => {
              return <h1>title of the book :{b.title}</h1>;
            })}
          </>
        );
      })}
    </div>
  );
}

export default Books;
