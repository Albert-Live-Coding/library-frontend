import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage';
import { App } from '../App';
import AllBooks from '../pages/AllBooks';
import Cart from '../pages/Cart';
import CategoryPage from '../pages/CategoryPage';
import SingleBookPage from '../pages/SingleBookPage';
export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFoundPage />,
    children: [
      {
        element: <AllBooks />,
        path: '/',
      },
      {
        element: <Cart />,
        path: '/cart',
      },
      {
        element: <CategoryPage />,
        path: '/category',
      },
      {
        element: <SingleBookPage />,
        path: '/single-book',
      },
    ],
  },
]);
