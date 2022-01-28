import { DeepReadonly } from "vue";

export interface Person {
  id: number;
  name: string;
  description: string;
  image?: any;
  birth?: Date,
}

export interface PersonStore {
  state: DeepReadonly<Person[]>;
  getPersons: () => Person[],
  fetchPersons:  () => Promise<Person[]>
}
