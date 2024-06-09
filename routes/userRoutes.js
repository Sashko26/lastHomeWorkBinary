import { Router } from 'express';
import { userService } from '../services/userService.js';
import { createUserValid, updateUserValid } from '../middlewares/user.validation.middleware.js';
import { responseMiddleware } from '../middlewares/response.middleware.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.data = await userService.getAll();
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', async (req, res, next) => {
  try {
    res.data = await userService.getById(req.params.id);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.post('/', createUserValid, async (req, res, next) => {
  try {
    res.data = await userService.create(req.body);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.patch('/:id', updateUserValid, async (req, res, next) => {
  try {
    res.data = await userService.update(req.params.id, req.body);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.delete('/:id', async (req, res, next) => {
  try {
    res.data = await userService.delete(req.params.id);
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

export { router };
