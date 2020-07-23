<template>
  <div class="relative" v-if="showMenu" @mouseleave="showMenu = false">
    <div class="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <g-link
        v-for="categoria in categorias"
        :key="categoria"
        :to="categoria"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >{{ categoria }}</g-link
      >
    </div>
  </div>
</template>
<script>
import categorias from '@/data/categorias.yaml';
export default {
  data() {
    return {
      categorias,
    };
  },
};
</script>
