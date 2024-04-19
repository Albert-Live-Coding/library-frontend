import styled from "styled-components";

const DivBooks = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid;
`;

const Bestseller = () => {
  const books = {
    bestseller: [
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://m.media-amazon.com/images/I/61HN-hRIGsL._AC_UF894,1000_QL80_.jpg",
        id: 1,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://m.media-amazon.com/images/I/61HN-hRIGsL._AC_UF894,1000_QL80_.jpg",
        id: 2,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://m.media-amazon.com/images/I/61HN-hRIGsL._AC_UF894,1000_QL80_.jpg",
        id: 3,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://m.media-amazon.com/images/I/61HN-hRIGsL._AC_UF894,1000_QL80_.jpg",
        id: 4,
      },
    ],
    classic: [
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://cdnb.artstation.com/p/assets/images/images/028/032/393/large/tyler-lockett-moby-dick.jpg?1593289696",
        id: 1,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://cdnb.artstation.com/p/assets/images/images/028/032/393/large/tyler-lockett-moby-dick.jpg?1593289696",
        id: 2,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://cdnb.artstation.com/p/assets/images/images/028/032/393/large/tyler-lockett-moby-dick.jpg?1593289696",
        id: 3,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://cdnb.artstation.com/p/assets/images/images/028/032/393/large/tyler-lockett-moby-dick.jpg?1593289696",
        id: 4,
      },
    ],
    krimi: [
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sa5a568a9d0b138e0/image/ib98b7d4b3254630b/version/1704554063/image.jpg",
        id: 1,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sa5a568a9d0b138e0/image/ib98b7d4b3254630b/version/1704554063/image.jpg",
        id: 2,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sa5a568a9d0b138e0/image/ib98b7d4b3254630b/version/1704554063/image.jpg",
        id: 3,
      },
      {
        title: "Book1",
        author: "Frank",
        price: 10,
        url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sa5a568a9d0b138e0/image/ib98b7d4b3254630b/version/1704554063/image.jpg",
        id: 4,
      },
    ],
  };

  function mapBooks(book) {
    return (
      <div style={{ display: "flex" }} key={book.id}>
        <img
          style={{ width: 200, height: 200 }}
          src={book.url}
          alt="book-cover"
        />
        <div>
          <h3> {book.title}</h3>
          <p>{book.author}</p>
          <p>{book.price}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Bestseller</h2>
      <DivBooks>
        {books.bestseller.map((book) => {
          return mapBooks(book);
        })}
      </DivBooks>
      <h2>Classic</h2>
      <DivBooks>
        {books.classic.map((book) => {
          return mapBooks(book);
        })}
      </DivBooks>

      <h2>Krimi</h2>
      <DivBooks>
        {books.krimi.map((book) => {
          return mapBooks(book);
        })}
      </DivBooks>
    </div>
  );
};

export default Bestseller;
