import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { matchRoutes } from 'react-router-dom';
import App from '../client/App';
import routes from '../client/routes';
import { DataProvider } from '../client/store';

const app = new Express();

app.use('/public', Express.static(path.join(__dirname, "../dist/client")));

app.get('/*', async (req, res) => {
  // 匹配路由
  const matchedRoutes = matchRoutes(routes, req.url);
  // 匹配到的路由数量为 0，返回 404
  if (!matchedRoutes?.length) {
    res.statusCode = 404;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.send(`Cannot GET ${req.url}`);
    return;
  }

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