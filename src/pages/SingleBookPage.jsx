import FetchData from "../utils/FetchData";
import BookComponent from "../components/Book-Elvira";
import { useState, useEffect } from "react";

const SingleBookPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await FetchData(); //FETCHDATA hier
        setBooks(data);
      } catch (error) {
        console.error("Error!", error);
      } //Fehlermeldung
    };

    fetchBooks();
  }, []);
//Component + Prop der an Book-Elvira gebunden ist
  return (
    <div>
      <h1>Book Details</h1>
      {/* <div>
        {books.map((book) => (
          <BookComponent book={book} /> 
        ))}
      </div> */}
    </div>
  );
};

export default SingleBookPage;

