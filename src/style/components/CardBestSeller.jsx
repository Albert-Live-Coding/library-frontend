import React from "react";

const CardBestSeller = () => {
  return (
    <div className="book-card" style= "">
      <img src={book.cover} alt="" />
      <h1>{book.releaseYear}</h1>
      <p>{book.author}</p>
      <p>{book.price}</p>
    </div>
  );
};

export default CardBestSeller;
