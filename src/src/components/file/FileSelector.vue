<template>
  <div>
    <div>ファイルアップロード</div>
    <div>
      <label for="filename">ファイル名</label>
      <span>{{ errorMessage }}</span>
    </div>
    <input type="file" :v-model="value" @change="onFileSelected" />
    <!-- <input type="button" @click="onFileClearClicked" value="クリア" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as yup from "yup";
import { useField } from "vee-validate";

export default defineComponent({
  props: {
    max: {
      type: Number,
      default: 10_000_000, // 10MB
    },
  },
  emits: ["onFileChanged"],
  setup(props, { emit }) {
    let filename = ref("");
    // const fileupload = ref<HTMLInputElement>();

    const { errorMessage, value, handleChange, meta, validate } =
      useField<File>(
        "file",
        yup
          .mixed()
          .notRequired()
          .test("fileSize", "ファイルサイズの合計は10MBまでです", (value) => {
            return value && value.size < props.max;
          })
      );

    const onFileSelected = async (e: Event) => {
      handleChange(e, true);

      const target = e.target as HTMLInputElement;

      if (target.files && target.files.length > 0) {
        emit("onFileChanged", target.files[0], (await validate()).valid);
      }
    };

    // const onFileClearClicked = () => {
    //   console.log("onFileClearClicked")
    //   if (fileupload.value) {
    //     fileupload.value.files = null;
    //   }
    // };

    return {
      onFileSelected,
      // onFileClearClicked,
      filename,
      // fileupload,
      errorMessage,
      value,
      meta,
    };
  },
});
</script>
