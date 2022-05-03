import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Info: FC = () => {
  const handleClick = (): void => {
    alert('hello');
  }

  return (
    <>
      <h1>info page</h1>
      <button type="button" onClick={handleClick}>click me</button>
      <br />
      <Link to="/">to Home</Link>
    </>
  )
}

export default Info;