// import axios from "axios";

// export default defineNuxtPlugin(async (nuxtApp) => {
  
//   // return {
//   //   provide: {
//   //     axios: axios,
//   //     baseUrl : 'http://127.0.0.1:8000/api/welcome'
//   //   },
//   // };

//   nuxtApp.provide('axios' , axios);
//   nuxtApp.provide('baseUrl' , 'http://127.0.0.1:8000')
// });



import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {
    axios.defaults.baseURL = 'http://127.0.0.1:8001'
    axios.defaults.withCredentials = false;
    axios.defaults.proxyHeaders = false;
    if(process.client){
        const token = window.localStorage.getItem('token');
        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
    }
    return {
        provide: { 
            axios: axios
        },
    }
})

