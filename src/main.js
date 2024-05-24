// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css'
// import './index.css'
// import './router.js'

// // createApp(App).mount('#app')


// const app = createApp(App);
// app.use(router);
// app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./index.css";
import router from "./router.js"; // Import the router instance

const app = createApp(App);
app.use(router);
app.mount("#app");