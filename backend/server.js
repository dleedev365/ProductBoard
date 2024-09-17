import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import IndexRouter from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use('/api', IndexRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on PORT: ${port}`);
});
