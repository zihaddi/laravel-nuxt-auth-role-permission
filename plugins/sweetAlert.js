import Swal from 'sweetalert2'


export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: { 
            Swal: Swal
        },
    }
  })


// import swal from "sweetalert2";


// const $swal = {
//     install: (Vue, options) => {
//         Vue.config.globalProperties.$swal = swal.mixin(options);
//     },
// }
// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.vueApp.use($swal, {
//         reverseButtons: true,
//         confirmButtonText: "confirmText",
//         cancelButtonText: "cancelText",
//         confirmButtonColor: "#84bd00",
//     });
// });