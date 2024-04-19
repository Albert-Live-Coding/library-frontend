import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import FormLogin from './components/FormLogin.jsx';
/* import FetchData from './utils/FetchData';
FetchData().then((data) => console.log(data)); */

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FormLogin />
    </>
  );
};
