import express from 'express';
import { initRoutes } from './routes/routes.js';

import cors from 'cors';
const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

initRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
