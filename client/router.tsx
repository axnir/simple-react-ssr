import React, { FC } from 'react';
import { ReactNode } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

export interface IRouterProps {
  children: ReactNode;
  _location?: string;
}

const Router: FC<IRouterProps> = ({ children, _location }) => {
  // 使用 window 判断当前所处环境
  if (typeof window === 'object') {
    return (
      <BrowserRouter>{children}</BrowserRouter>
    )
  }

  // StaticRouter 用于 node 环境，它是无状态的，需要手动传入 location
  return (
    <StaticRouter location={_location}>{children}</StaticRouter>
  )
}

export default Router;