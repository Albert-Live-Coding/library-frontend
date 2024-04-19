import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <h1>App</h1>
      <Outlet />
    </>
  );
};
