import { fightRepository } from '../repositories/fightRepository.js';

class FightService {
  getAll() {
    return fightRepository.getAll();
  }

  getById(id) {
    return fightRepository.getOne({ id });
  }

  create(data) {
    return fightRepository.create(data);
  }

  update(id, data) {
    return fightRepository.update(id, data);
  }

  delete(id) {
    return fightRepository.delete(id);
  }
}

const fightService = new FightService();
export { fightService };
