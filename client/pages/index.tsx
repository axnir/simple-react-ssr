import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Index: FC = () => {
  const str = 'this is a simple react ssr demo';

  return (
    <>
      <h1>{str}</h1>
      <Link to="/info">Info</Link>
    </>
  )
}

export default Index;