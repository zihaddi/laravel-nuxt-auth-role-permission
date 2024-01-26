<template>
    <div>
      <h2>Post Details</h2>
      <p v-if="loading">Loading...</p>
      <div v-else>
        
        <p>{{ post }}</p>
      </div>
    </div>
  </template>
  
  <script>
  definePageMeta({
     layout: 'dashboard',
   });
  export default {
    data() {
      return {
        post: null,
        loading: true,
        
      };
    },
   //This is composable implementation. useTest is a file that is in composables/useTest.js
    setup(){
       const tanha = useTest();   
       tanha();
       
    },
  
    mounted() {
      const apiUrl = useNuxtApp().$baseUrl;
      const axios = useNuxtApp().$axios;
      // useNuxtApp()
      axios.get(apiUrl)
        .then((response) => {
          this.post = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
        this.$globalFunctions.globFunction1();
        this.$globalFunctions.globFunction2();
    },

  };
  </script>