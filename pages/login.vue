<template>
  <div>
    <div class="min-h-screen w-full flex justify-center items-center">
      <form class="sm:w-full sm:max-w-sm drop-shadow-2xl border rounded-lg p-8">
        <InputComp label="Email" />
        <ButtonComp />
      </form>
    </div>
  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api";

import InputComp from "@/components/form/input.vue";
import ButtonComp from "~~/components/form/button.vue";

definePageMeta({
  title: "user Login Page",
  layout: "custom",
});

export default defineComponent({
  components: { InputComp, ButtonComp },
  setup() {},
});
</script>
