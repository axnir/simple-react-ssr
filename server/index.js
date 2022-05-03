import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../client/App';
import { DataProvider } from '../client/store';

const app = new Express();

app.use('/public', Express.static(path.join(__dirname, "../dist/client")));

app.get('/*', async (req, res) => {
  const store = { info: 'this is a simple react ssr demo' };

  let didError = false;
  const { pipe, abort } = renderToPipeableStream(
    <DataProvider value={store}>
      <App _location={req.url} />
    </DataProvider>,
    {
      bootstrapScripts: ['/public/main.js'],
      bootstrapScriptContent: `window.__DATA__ = ${JSON.stringify(store)}`,
      onShellReady () {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html; charset=utf-8');
        pipe(res);
      },
      onShellError (x) {
        didError = true;
        console.error(x);
      },
    }
  );
});

app.listen(4000, () => {
  console.log("service is running, port is 4000");
});