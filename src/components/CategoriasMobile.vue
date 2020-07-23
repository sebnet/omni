<template>
  <div
    v-if="showMenu"
    @mouseleave="showMenu = false"
    class="bottom-0 ml-10 mb-16 fixed w-48 rounded-md shadow-2xl"
  >
    <div class="py-1 rounded-md bg-white shadow-xs relative">
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >kkkk</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >kkkk</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >kkkk</a
      >
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
