import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { App } from './app'
import fs from 'fs'
import path from 'path'
 
const PORT = 3000;
const app = express();

app.get('/', (_req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve('./index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('../dist'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
