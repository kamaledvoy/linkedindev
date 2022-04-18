<template>
  <DynamicLayout>
    <template #header>
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
            <li><NuxtLink to="/">Student Dashboard</NuxtLink></li>
            <li><NuxtLink to="/profile">Profile</NuxtLink></li>
            <li><NuxtLink to="/logout">Logout</NuxtLink></li>
          </ul>
        </div>
        <div class="lg:w-2/6 text-right">          
          <h1>User Name</h1>
        </div>
      </div>
    </template>
    <h1>Dashboard Page</h1>
  </DynamicLayout>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import DynamicLayout from "@/layouts/dynamic.vue";

definePageMeta({
  title: "Dashboard Page",
  layout: "dynamic",
});

export default defineComponent({
  components: { DynamicLayout },
  setup() {},
});
</script>


<style>
</style>