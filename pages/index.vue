

<template> 
<div>
      <h1 class="text-3xl font-bold underline text-blue-600">
    Hello world!
  </h1>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'My home page',
  layout: "default",
})
const route = useRoute()
console.log(route.meta.title) 
</script>