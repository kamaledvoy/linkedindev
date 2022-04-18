<template>
  <div class="min-h-screen flex flex-col justify-start">
    <div>
      <slot name="header"></slot>
    </div>
    <main>
      <slot />
    </main>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
  created() {
    console.log('Dynamic layout created')
  }
})
</script>

<style>
</style>