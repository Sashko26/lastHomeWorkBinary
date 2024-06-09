import { userRepository } from '../repositories/userRepository.js';

class UserService {
  getAll() {
    return userRepository.getAll();
  }

  getById(id) {
    return userRepository.getOne({ id });
  }

  create(data) {
    return userRepository.create(data);
  }

  update(id, data) {
    return userRepository.update(id, data);
  }

  delete(id) {
    return userRepository.delete(id);
  }
}

const userService = new UserService();
export { userService };
