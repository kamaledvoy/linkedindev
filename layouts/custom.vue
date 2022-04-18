<template>
  <header> 
    <slot name="header"></slot>
  </header>
  <main>
    <slot />
  </main>
  <div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
  created() {
    console.log('Custom layout created')
  }
})
</script>
