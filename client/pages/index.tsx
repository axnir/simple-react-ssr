import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../store';
import './index.less';

const Index: FC = () => {
  const { info } = useData();

  return (
    <div className='index-container'>
      <h1>{info}</h1>
      <Link to="/info">to Info</Link>
    </div>
  )
}

export default Index;