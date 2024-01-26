import Pusher from 'pusher-js';

export default defineNuxtPlugin((nuxtApp) => {
  const pusher = new Pusher('4ebd3291a39a711c39bc', {
    cluster: 'ap2',
    forceTLS: true, // Enforce secure connection
  });

  nuxtApp.provide('pusher', pusher);
});