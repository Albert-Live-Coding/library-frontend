import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage';
import { App } from '../App';
export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFoundPage />,
    children: [{}],
  },
]);
