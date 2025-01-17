import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbUrl: string = process.env.MongodbUrl!;
const port: string = process.env.Port!;

(async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
})();

app.use('/', authRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
