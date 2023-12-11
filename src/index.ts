import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

app.get('/', (_req, res) => {
  res.send('Hello there again');
});

app.listen(4500, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running..');
});
