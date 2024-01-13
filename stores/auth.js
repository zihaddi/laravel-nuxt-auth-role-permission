import { defineStore } from "pinia";


export const useAuthStore =defineStore('auth' , {
    //state :
    state : ()=>({
        id : '',
        name : '',
        email : '',
        token : '',
        isLoggedIn : false
    }),


    actions :{
        async login(email , password){
            console.log(email , password)
            const axios = useNuxtApp().$axios;
            axios.post(`/api/login`,{email , password})
                    .then((response) => {
                        console.log(response.data)
                        localStorage.setItem('token',response.data.access_token)
                        this.$state.token = response.data.access_token
                        this.$state.email = response.data.user.email
                        this.$state.id = response.data.user.id
                        this.$state.name = response.data.user.name
                        this.$state.isLoggedIn = true;
                    })
                    .catch((error) => {
                    console.error(error);
                    });
                    this.$globalFunctions.globFunction1();
                    this.$globalFunctions.globFunction2();
                }
    }
})