<template>
  <div class="relative" v-if="showMenu" @mouseleave="showMenu = false">
    <div class="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >kkkk</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Support</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Sign out</a
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
