import React, { FC } from 'react';
import { ReactNode } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

export interface IRouterProps {
  children: ReactNode;
  _location: string;
}

const Router: FC<IRouterProps> = ({ children, _location }) => {
  if (typeof window === 'object') {
    return (
      <BrowserRouter>{children}</BrowserRouter>
    )
  }

  return (
    <StaticRouter location={_location}>{children}</StaticRouter>
  )
}

export default Router