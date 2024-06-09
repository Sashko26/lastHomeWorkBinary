import { USER } from '../models/user.js';

const createUserValid = (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  
  console.log('Validating user data:', { firstName, lastName, email, phoneNumber, password });

  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    console.log('Validation error: Missing required fields');
    return res.status(400).json({ error: true, message: 'Missing required fields' });
  }

  if (!email.endsWith('@gmail.com')) {
    console.log('Validation error: Invalid email format');
    return res.status(400).json({ error: true, message: 'Invalid email format' });
  }

  if (!/^\+380\d{9}$/.test(phoneNumber)) {
    console.log('Validation error: Invalid phone number format');
    return res.status(400).json({ error: true, message: 'Invalid phone number format' });
  }

  if (password.length < 3) {
    console.log('Validation error: Password must be at least 3 characters');
    return res.status(400).json({ error: true, message: 'Password must be at least 3 characters' });
  }

  next();
};


const updateUserValid = (req, res, next) => {
  const { email, phoneNumber, password } = req.body;

  if (email && !email.endsWith('@gmail.com')) {
    return res.status(400).json({ error: true, message: 'Invalid email format' });
  }

  if (phoneNumber && !/^\\+380\\d{9}$/.test(phoneNumber)) {
    return res.status(400).json({ error: true, message: 'Invalid phone number format' });
  }

  if (password && password.length < 3) {
    return res.status(400).json({ error: true, message: 'Password must be at least 3 characters' });
  }

  next();
};

export { createUserValid, updateUserValid };
