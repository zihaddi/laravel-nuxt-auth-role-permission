<template>
    <div>
        <form class="mt-12" @submit.prevent="submit()">
                                <div>
                                    <input type="text" placeholder="Email: link@gmail.com" v-model="user.email"
                                        inputType="email"  />
                                </div>
                                <div class="mt-4">
                                    <input type="password" placeholder="Password" v-model="user.password" inputType="password"
                                         />
                                </div>
                                <div class="mt-10">
                                    <input type="submit" value="submit"/>
                                </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import { useAuthStore } from '@/stores/auth';
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
                    console.log('submit')
                    console.log(this.user.email, this.user.password)
                    await useAuthStore().login(this.user.email, this.user.password);
                    const token = window.localStorage.getItem('token');
                    if (token) {
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + useAuthStore().token;
                    }
                        router.push('/')
                    } 
                    catch (error) {
                    }
            }
        }
    }
</script>

<style scoped>

</style>