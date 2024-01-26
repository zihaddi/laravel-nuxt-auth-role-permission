<template>
    <button @click="toggleDarkMode" class="focus:outline-none">
      <span v-if="isDarkMode" class="text-gray-400 dark:text-white">🌙</span>
      <span v-else class="text-yellow-500 dark:text-yellow-300">☀️</span>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.updateDarkMode();
      },
      updateDarkMode() {
        const darkModeClass = 'dark';
        if (this.isDarkMode) {
          document.body.classList.add(darkModeClass);
        } else {
          document.body.classList.remove(darkModeClass);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>