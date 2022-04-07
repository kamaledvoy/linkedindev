<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup>
import '@/assets/scss/main.scss'
</script>

<style scoped>
.gradient-border {
    background-color: #ffffff4d;
}
.gradient-border {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
}
.gradient-border:before {
    background: linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1);
}
.gradient-border:before {
    background-position: 0 0;
    background-size: 400% auto;
    border-radius: 0.5rem;
    bottom: 0;
    content: "";
    left: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: .5;
    padding: 2px;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-position .3s ease-in-out,opacity .2s ease-in-out;
    width: 100%;
}
.gradient-border:hover:before {
    background-position: -50% 0;
    opacity: 1;
}
</style>