import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Index: FC = () => {
  const str = 'info page';

  return (
    <>
      <h1>{str}</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default Index;