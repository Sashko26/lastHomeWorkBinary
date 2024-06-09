import { Router } from 'express';
import { fightService } from '../services/fightService.js';
import { responseMiddleware } from '../middlewares/response.middleware.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.data = await fightService.getAll();
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', async (req, res, next) => {
  try {
    res.data = await fightService.getById(req.params.id);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.post('/', async (req, res, next) => {
  try {
    res.data = await fightService.create(req.body);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.patch('/:id', async (req, res, next) => {
  try {
    res.data = await fightService.update(req.params.id, req.body);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.delete('/:id', async (req, res, next) => {
  try {
    res.data = await fightService.delete(req.params.id);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
