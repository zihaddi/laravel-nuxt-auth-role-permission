<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Real-Time Input Data:</h2>
  
      <div v-if="inputData" class="bg-gray-200 p-4 rounded-md">
        {{ inputData }}
      </div>
  
      <div v-else class="text-gray-500">
        No real-time data available.
      </div>
    </div>
  </template>
  
  <script>
  export default {
   
    data() {
      return {
        inputData: '',
      };
    },
    mounted() {
        const pusher = useNuxtApp().$pusher;
        pusher.subscribe('my-channel').bind('my-event', async (data) => {
        
        try {
            this.inputData =JSON.stringify(data.message);
        } catch (error) {
          console.error('Error fetching real-time data:', error);
          // Handle error if needed
        }
      });
    },
  };
  </script>