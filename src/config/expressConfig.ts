// src/config/expressConfig.ts ← configuração do app Express
import express from 'express';
import taskRoutes from '../routes/taskRoutes';

const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);

export { app };