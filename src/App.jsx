import Header from "./components/Header";
import AllBooks from "./pages/AllBooks";

/* import FetchData from './utils/FetchData';
FetchData().then((data) => console.log(data)); */

export const App = () => {
  return (
    <>
      <Header />
      <h1>Hello There</h1>
      <AllBooks />
    </>
  );
};
