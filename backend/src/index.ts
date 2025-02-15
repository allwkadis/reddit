import express from 'express';

const expresApp = express();

expresApp.get('/posts', (req, res) => {
  res.send('posts');
});

expresApp.get('/', (req, res) => {
  res.send('main');
});

expresApp.listen(3000, () => {
  console.info('server start at http://localhost:3000/');
});
