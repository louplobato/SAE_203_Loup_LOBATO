import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRUVxBdJndTdLHKWSfCGqgiYB4wNKsYR4",
    authDomain: "sae203louplobato.firebaseapp.com",
    projectId: "sae203louplobato",
    storageBucket: "sae203louplobato.appspot.com",
    messagingSenderId: "1067226577720",
    appId: "1:1067226577720:web:e297ece02957888ebe1fcd",
    measurementId: "G-Y720GR4FQP"
};

const appfirebase = initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')
