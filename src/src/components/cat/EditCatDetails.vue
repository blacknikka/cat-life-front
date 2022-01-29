<template>
  <form>
    <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
      <div class="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
        <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
          Edit Cat
        </h1>
        <div class="space-y-4">
          <div>
            <label for="name" class="text-lx font-serif">Name:</label>
            <input
              type="text"
              placeholder="name"
              id="name"
              class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
            />
          </div>
          <div>
            <label for="description" class="block mb-2 text-lg font-serif"
              >Description:</label
            >
            <textarea
              id="description"
              cols="3"
              rows="6"
              placeholder="description"
              class="w-full font-serif p-4 text-gray-400 bg-indigo-50 outline-none rounded-md"
            ></textarea>
          </div>
          <button
            class="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
            @click="onEditClick"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    id: Number,
    name: String,
    description: String,
    birth: Date,
    image: String,
  },
  setup(props) {
    const router = useRouter();

    const onEditClick = () => {
      router.push({ name: "CatDetailsView", params: { id: props.id } });
    };

    return {
      onEditClick,
    };
  },
});
</script>
