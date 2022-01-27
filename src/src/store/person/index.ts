import { InjectionKey, shallowReadonly } from "vue";
import { Person, PersonStore } from "@/store/person/types";

const state: Person[] = [
  {
    id: 1,
    name: "person1",
    description: "something aaaa  xxxxx  yy",
    image: undefined,
    birth: new Date("1980-10-1"),
  },
  {
    id: 2,
    name: "person2",
    description: "xxxxxxxxxxxxxxxxy          ",
    image: undefined,
    birth: new Date("2001-4-1"),
  },
];

const getPersons = (): Person[] => {
  return state;
};

const fetchPersons = async (): Promise<Person[]> => {
  return await state;
};

const personStore: PersonStore = {
  state: shallowReadonly(state),
  getPersons,
  fetchPersons,
};

export default personStore;

export const personKey: InjectionKey<PersonStore> = Symbol("person");
