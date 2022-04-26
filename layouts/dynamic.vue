<template>
  <div class="min-h-screen flex flex-col justify-start">
    <div>
      <slot name="header"> 
        <div
        class="
          container
          flex
          justify-between
          items-center
          mx-auto
          border-b border-b-gray-200
          py-4
        "
      >

        <div class="lg:w-2/3 text-left">
          <ul
            role="list"
            class="list-none flex justify-start items-start space-x-4"
          >
            <li><NuxtLink to="/student">Student Dashboard</NuxtLink></li>
            <li><NuxtLink to="/profile">Profile</NuxtLink></li>
            <li><NuxtLink to="/logout">Logout</NuxtLink></li>
          </ul>
        </div>
        <div class="lg:w-2/6 text-right">          
          <h1>User Name</h1>
        </div>
      </div></slot>
    </div>
    <main>
      <slot />
    </main>
    <div>
      <slot name="footer"> Dashboard Footer</slot>
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