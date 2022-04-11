<template>
  <div class="min-h-screen flex flex-col justify-start">
    <header>
      <slot name="header"> Custom Layout</slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">Custom Footer</slot>
    </footer>
  </div>
</template>
<script setup>
export default {
    created() {
        console.log("Custom Layout Created");
    }
}
</script>

<style>
</style>