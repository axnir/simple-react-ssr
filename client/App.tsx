import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Router from './router';
import routes from './routes';
import Html from './components/Html';

import type { IRouterProps } from './router';

const App: FC<Pick<IRouterProps, '_location'>> = ({ _location }) => (
  <Html title="simple-react-ssr">
    <Router _location={_location}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </Router>
  </Html>
);

export default App;
