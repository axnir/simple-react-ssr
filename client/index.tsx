import React from 'react';
import App from './App';
import { hydrateRoot } from 'react-dom/client';
import { DataProvider } from './store';

hydrateRoot(
  document,
  <DataProvider value={window.__DATA__}>
    <App />
  </DataProvider>
);
