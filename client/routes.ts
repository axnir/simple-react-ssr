import Home from './pages';
import Info from './pages/info';

const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: 'info/*',
    element: Info,
  },
];

export default routes;
