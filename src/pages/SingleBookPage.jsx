import FetchData from './utils/FetchData';

export const SingleBookPage = () => {
  const [books, setBooks] = useState([]);
  const cartBooks = [books[3], books[1], books[2]];
  return (
    <div className="about-page">
      <h1>About Page</h1>
    </div>
  );
};
