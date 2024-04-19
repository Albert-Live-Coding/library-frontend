const Bestseller = () => {
  const books = {
    bestseller: [
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 1 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 2 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 3 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 4 },
    ],
    classic: [
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 1 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 2 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 3 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 4 },
    ],
    krimi: [
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 1 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 2 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 3 },
      { title: "Book1", author: "Frank", price: 10, url: "#", id: 4 },
    ],
  };

  function mapBooks(book) {
    return (
      <div key={book.id}>
        <img src={book.url} alt="book-cover" />
        <div key={book.id}>
          <h3 key={book.id}> {book.title}</h3>
          <p key={book.id}>{book.author}</p>
          <p key={book.id}>{book.price}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Bestseller</h2>
      {books.bestseller.map((book) => {
        mapBooks(book);
      })}
      <h2>Classic</h2>
      {books.classic.map((book) => {
        mapBooks(book);
      })}
      <h2>Krimi</h2>
      {books.krimi.map((book) => {
        mapBooks(book);
      })}
    </div>
  );
};

export default Bestseller;
