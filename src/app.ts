import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server Live ⚡');
});

export default app;
