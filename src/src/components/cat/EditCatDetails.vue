<template>
  <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
    <div class="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
        {{ editMode }}
      </h1>
      <div class="space-y-4">
        <div>
          <label for="name" class="text-lx">Name:</label>
          <input
            type="text"
            placeholder="name"
            id="name"
            class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
          />
        </div>
        <div>
          <label for="description" class="block mb-2 text-lg"
            >Description:</label
          >
          <textarea
            id="description"
            cols="3"
            rows="6"
            placeholder="description"
            class="w-full p-4 text-gray-400 bg-indigo-50 outline-none rounded-md"
          ></textarea>
        </div>
        <div>
          <label
            class="block tracking-wide text-gray-700 text-m font-bold mb-2"
            for="year"
          >
            Birthday
          </label>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="year"
            >
              Year
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="year"
              type="number"
              placeholder="2010"
              v-model="year"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="month"
            >
              Month
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="month"
              type="number"
              placeholder="10"
              v-model="month"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="day"
            >
              Date
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="day"
              type="number"
              placeholder="15"
              v-model="day"
            />
          </div>
        </div>

        <div>
          <label
            class="block tracking-wide text-gray-700 text-m font-bold mb-2"
            for="year"
            v-if="isBirthdayError"
          >
            Please confirm the cat's birthday is valid.
          </label>
        </div>

        <button
          :disabled="isBirthdayError"
          class="disabled:bg-white disabled:bg-gray-500 px-6 py-2 mx-auto block text-lg text-indigo-100 bg-blue-500"
          @click="onSendClick"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    mode: String,
    id: Number,
    name: String,
    description: String,
    birth: Date,
    image: String,
  },
  setup(props) {
    // birthday
    let year = ref(2010);
    let month = ref(10);
    let day = ref(15);

    const router = useRouter();

    const onSendClick = () => {
      if (Number(year.value) && Number(month.value) && Number(day.value)) {
        const birthday = new Date(year.value, month.value, day.value);

        // create or edit
        if (props.id && Number(props.id) && props.id > 0) {
          // edit
          router.push({ name: "CatDetailsView", params: { id: props.id } });
        } else {
          // create
          router.push({ name: "Home" });
        }
      }
    };

    const isBirthdayError = computed(() => {
      return !(Number(year.value) && Number(month.value) && Number(day.value));
    });

    const editMode = computed(() => {
      return props.mode === "create" ? "Create New Cat": "Edit Cat";
    });

    return {
      onSendClick,
      editMode,
      year,
      month,
      day,
      isBirthdayError,
    };
  },
});
</script>
