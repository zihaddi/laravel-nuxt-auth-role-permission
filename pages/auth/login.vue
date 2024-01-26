<template>
    <div>
    
        <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white-900">Login to Your Account</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="sr-only">Email</label>
          <input id="email" v-model="user.email" name="email" type="text" autocomplete="email" required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" v-model="user.password" name="password" type="password" autocomplete="current-password" required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password">
        </div>
        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { useAuthStore } from '@/stores/auth';

    definePageMeta({
     layout: 'custom',
   });
    export default {
        
        data(){
            return {
                user:{
                       email : '',
                       password : ''
                     }
            }
        },
       
        methods:{
            async submit(){
                try {
                    await useAuthStore().login(this.user.email, this.user.password);                  
                    setTimeout(() => {
                      const token = localStorage.getItem('token');                      
                      if (token) {
                        console.log('token : ' , token) 
                          axios.defaults.headers.common['Authorization'] = 'Bearer ' + useAuthStore().token;
                          this.$router.push('/home')
                      }
                    }, 1000);
                    
                    } 
                    catch (error) {
                      
                    }
            }
        }
    }
</script>

<style scoped>

</style>