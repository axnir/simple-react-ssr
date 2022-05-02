import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/App';

const app = new Express();

app.use('/public', Express.static(path.join(__dirname, "../dist/client")));

app.get('/', async (req, res) => {

  let didError = false;
  const { pipe, abort } = renderToPipeableStream(
    <StaticRouter location={res.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['/public/main.js'],
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html; charset=utf-8');
        pipe(res);
      },
      onShellError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
});

app.listen(4000, () => {
  console.log("service is running, port is 4000");
});