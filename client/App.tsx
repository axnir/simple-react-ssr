import React, { FC } from 'react';
import Index from './pages';
import Html from './components/Html';

const App: FC = () => (
  <Html title="simple-react-ssr">
    <Index />
  </Html>
);

export default App;