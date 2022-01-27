<template>
  <person-view-item
    v-for="person in persons"
    :name="person.name"
    :description="person.description"
    :birth="person.birth"
    :image="person.image"
    :key="person.id"
  />
</template>

<script lang="ts">
import { inject, reactive, defineComponent, onMounted } from "vue";
import { PersonStore, Person } from "@/store/person/types";
import { personKey } from "@/store/person";
import PersonViewItem from "./PersonViewItem.vue";
// import { useRouter } from "vue-router";

// interface State {
//   persons: Person[];
// }

export default defineComponent({
  components: {
    PersonViewItem,
  },
  setup() {
    // const state = reactive<State>({
    //   persons: [],
    // });

    const persons = reactive<Person[]>([]);

    // // router
    // const router = useRouter();

    const personStore: PersonStore | undefined = inject<PersonStore>(personKey);
    if (!personStore) {
      throw new Error("personStore is not provided.");
    }

    // person
    onMounted(async () => {
      persons.push(...(await personStore.fetchPersons()));
    });

    return {
      persons,
    };
  },
});
</script>
