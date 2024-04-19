import { useEffect, useState } from "react";
import BookComponent from "../components/Book-Elvira";
import FetchData from "../utils/FetchData";

const Cart = () => {
  //   temporary fix instead of real books:
  const fakeBooks = [
    { title: "XYZ", author: "Author 1", price: "13" },
    { title: "XYZ", author: "Author 1", price: "13" },
    { title: "XYZ", author: "Author 1", price: "13" },
  ];
  useEffect(() => setCartBooks(fakeBooks), []);

  useEffect(() => {
    FetchData()
      .then((data) => setBooks(data))
      .then(console.log(books));
  }, []);

  const [books, setBooks] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [send, setSend] = useState(4.95);
  const [cartBooks, setCartBooks] = useState([]);

  useEffect(() => {
    setSubtotal(cartBooks.reduce((acc, obj) => acc + obj.price, 0));
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      <div style={{ display: "flex" }}>
      {/*   <section>
          {cartBooks.map((book, index) => (
            <BookComponent key={index} book={book} />
          ))}
        </section> */}

        <section>
          <div>
            <h5>Subtotal</h5>
            <p>{subtotal}</p>
            <div>
              <h5>Send</h5>
              <p>{send}</p>
            </div>
            <div>
              <h5>Total</h5>
              <p>{subtotal + send}</p>
            </div>
          </div>
          <button>Check Out</button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
