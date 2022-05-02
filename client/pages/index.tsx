import React, { FC, Suspense } from 'react';
import './index.less';

const Index: FC = () => {
  const str = 'this is index page';

  return (
    <Suspense fallback={<div>loading...</div>}>
      <h1 className='index-container'>{str}</h1>
    </Suspense>
  )
}

export default Index;