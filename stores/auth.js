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
            const Swal = useNuxtApp().$Swal
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
                    
                    });
                },


        async logout() {
                    const axios = useNuxtApp().$axios;
                    await axios.get('/api/logout')
                    .then((response)=>{
                        console.log(response.data)
                    })
                    this.resetState()
                },
        
        resetState() {      
                    this.$state.id = ''
                    this.$state.full_name = ''
                    this.$state.email = ''
                    this.$state.api_token = ''
                    this.$state.isLoggedIn = false
                },        
    }
})