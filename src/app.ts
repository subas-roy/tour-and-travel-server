import express from 'express';
import userRouter from './modules/users/user.router';
import tourRouter from './modules/tours/tour.router';

const app = express();

// middleware
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);

app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
