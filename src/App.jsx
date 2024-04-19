mport Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
port Header from './components/Header';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  );
};
