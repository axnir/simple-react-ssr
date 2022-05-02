import React from 'react';
import App from './App';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

hydrateRoot(document, <BrowserRouter><App /></BrowserRouter>);
