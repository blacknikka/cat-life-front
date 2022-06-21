import { CatRepositoryInterface } from "@/repositories/catRepository/types";
import { UserRepositoryInterface } from "@/repositories/userRepository/types";
import { FeedRepositoryInterface } from "@/repositories/feedRepository/types";
import { CatRepository } from "@/repositories/catRepository/api";
import { FeedRepository } from "@/repositories/feedRepository/api";
import { UserRepository } from "./userRepository/api";

export class Repositories {
  private catRepository: CatRepositoryInterface;
  private userRepository: UserRepositoryInterface;
  private feedRepository: FeedRepositoryInterface;

  constructor(
    cat: CatRepositoryInterface,
    user: UserRepositoryInterface,
    feed: FeedRepositoryInterface,
  ) {
    this.catRepository = cat;
    this.userRepository = user;
    this.feedRepository = feed;
  }

  cat(): CatRepositoryInterface {
    return this.catRepository;
  }

  user(): UserRepositoryInterface {
    return this.userRepository;
  }

  feed(): FeedRepositoryInterface {
    return this.feedRepository;
  }
}

const repositories = new Repositories(
  new CatRepository(),
  new UserRepository(),
  new FeedRepository(),
);
export default repositories;
