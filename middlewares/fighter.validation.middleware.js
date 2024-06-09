import { FIGHTER } from '../models/fighter.js';

const createFighterValid = (req, res, next) => {
  const { name, power, defense } = req.body;

  if (!name || power === undefined || defense === undefined) {
    return res.status(400).json({ error: true, message: 'Missing required fields' });
  }

  if (power < 1 || power > 100) {
    return res.status(400).json({ error: true, message: 'Invalid power value' });
  }

  if (defense < 1 || defense > 10) {
    return res.status(400).json({ error: true, message: 'Invalid defense value' });
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  const { power, defense, health } = req.body;

  if (power !== undefined && (power < 1 || power > 100)) {
    return res.status(400).json({ error: true, message: 'Invalid power value' });
  }

  if (defense !== undefined && (defense < 1 || defense > 10)) {
    return res.status(400).json({ error: true, message: 'Invalid defense value' });
  }

  if (health !== undefined && (health < 80 || health > 120)) {
    return res.status(400).json({ error: true, message: 'Invalid health value' });
  }

  next();
};

export { createFighterValid, updateFighterValid };
