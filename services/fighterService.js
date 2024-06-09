import { fighterRepository } from '../repositories/fighterRepository.js';

class FighterService {
  getAll() {
    return fighterRepository.getAll();
  }

  getById(id) {
    return fighterRepository.getOne({ id });
  }

  create(data) {
    return fighterRepository.create(data);
  }

  update(id, data) {
    return fighterRepository.update(id, data);
  }

  delete(id) {
    return fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();
export { fighterService };
