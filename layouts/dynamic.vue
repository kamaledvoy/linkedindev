<template>
  <div class="min-h-screen flex flex-col justify-start">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script setup>
export default {
    created() {
        console.log("Dynamic Layout Created");
    }
}
</script>

<style>
</style>