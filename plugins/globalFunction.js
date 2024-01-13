

export default defineNuxtPlugin((nuxtApp) =>{
    nuxtApp.provide('globalFunctions' , {
         globFunction1(){
             console.log('glob function 1');
         },
         globFunction2(){
            console.log('glob function 2')
         }
    })
});

