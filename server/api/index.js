import express from 'express';
import todos from './todos.json';

const router = new express.Router();

router.get('/todos', (req, res) => res.json((todos)));

export default router;
