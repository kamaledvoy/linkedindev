

<template> 
    <h1 class="text-3xl font-bold underline text-blue-600">
    Hello world!
  </h1>
</template>

<script setup>
definePageMeta({
  title: 'My home page',
})
const route = useRoute()
console.log(route.meta.title) 
</script>