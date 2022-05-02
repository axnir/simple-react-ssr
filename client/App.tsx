import React, { FC, lazy } from 'react';
const Index  = lazy(() => import('./pages'));

const App: FC = () => (
  <Index />
);

export default App;