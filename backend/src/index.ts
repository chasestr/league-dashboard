import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import playerRoutes from './routes/player';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/player', playerRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
