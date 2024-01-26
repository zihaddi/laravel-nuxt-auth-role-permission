<template>
    <div class="p-4">
      <!-- Input field and button -->
      <div class="mb-4">
        <input v-model="inputData" placeholder="Type your input" class="border rounded-md p-2" />
        <button @click="sendMessage" class="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
      </div>
  
      <!-- Success message -->
      <div v-if="successMessage" class="text-green-500">
        {{ successMessage }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputData: '',
        successMessage: '',
      };
    },
    methods: {
      async sendMessage() {
        try {
          // Assuming you have some method to send the data to Laravel API
          const response = await this.$axios.post('/api/save_real_data', {
            data: this.inputData,
          });
          console.log(response.data.message);
  
        //   if (response.data.message === 'Data saved successfully') {
        //     this.$pusher.trigger('my-event', 'MyFirstEvent', {
        //       dataId: response.data.dataId,
        //     });
  
        //     // Display a success message
        //     this.successMessage = 'Data sent successfully!';
        //   }
        } catch (error) {
          console.error('Error sending data:', error);
          // Handle error if needed
        }
      },
    },
  };
  </script>