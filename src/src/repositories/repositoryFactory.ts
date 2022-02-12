import { CatRepositoryInterface } from '@/repositories/catRepository/types';
import { UserRepositoryInterface } from '@/repositories/userRepository/types';
import { CatRepository } from '@/repositories/catRepository/api';
import { UserRepository } from './userRepository/api';

export class Repositories {
  private catRepository: CatRepositoryInterface;
  private userRepository: UserRepositoryInterface;

  constructor(cat: CatRepositoryInterface, user: UserRepositoryInterface) {
    this.catRepository = cat;
    this.userRepository = user;
  }

  cat(): CatRepositoryInterface {
    return this.catRepository;
  }

  user(): UserRepositoryInterface {
    return this.userRepository;
  }
}

const repositories = new Repositories(new CatRepository(), new UserRepository());
export default repositories;
