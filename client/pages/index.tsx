import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../store';
import './index.less';

const Index: FC = () => {
  const { info } = useData();

  return (
    <>
      <h1>{info}</h1>
      <Link to="/info">to Info</Link>
    </>
  )
}

export default Index;