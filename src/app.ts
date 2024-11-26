import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
