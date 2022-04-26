<template>
  <div>
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
      <div class="lg:w-2/6 text-left">
        <h1>Company Name</h1>
      </div>
      <div class="lg:w-2/3 text-right">
        <ul role="list" class="list-none flex justify-end items-end space-x-4">
          <li><NuxtLink to="/" prefetch>Home</NuxtLink></li>
          <li><NuxtLink to="/about" prefetch>About us</NuxtLink></li>
          <li><NuxtLink to="/contact" prefetch>Contact</NuxtLink></li>
          <li><NuxtLink to="/login" prefetch>login</NuxtLink></li>
          <li><NuxtLink to="/dashboard" prefetch>Dashboard</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>
