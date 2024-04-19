import React, { useEffect, useState } from "react";
import FetchData from "../utils/FetchData";
import Header from "../components/Header";
import BookElvira from "../components/Book-Elvira";

const CategoryPage = () => {
  const [bookdata, setBookData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await FetchData();
        setBookData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [bookdata]);

  return (
    <>
      {/* {bookdata.map((book) => {
        <BookElvira book={book} />;
      })} */}
    </>
  );
};

export default CategoryPage;
