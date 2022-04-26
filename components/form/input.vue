<template>
  <div class="mb-4">
    <label
      v-if="label"
      for="email"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      type="email"
      name="email"
      id="email"
      placeholder="email"
      class="
        appearance-none
        block
        w-full
        px-4
        py-3
        border border-gray-300
        rounded-md
        shadow-sm
        placeholder-gray-400
        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
        sm:text-sm
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>
