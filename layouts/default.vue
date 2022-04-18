<template>
  <div class="min-h-screen flex flex-col justify-start">
    <HeaderComponent />
    <main class="flex">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/defaut/header.vue";
import FooterComponent from "@/components/defaut/footer.vue";

defineNuxtComponent({
  components: { HeaderComponent, FooterComponent },
});
</script>

<style>
</style>