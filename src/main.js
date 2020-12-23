import 'normalize.css'
import '@/assets/global.css'
import 'chartjs-plugin-streaming'
import Vue from 'vue'
import App from '@/App.vue'

new Vue({
    render: h => h(App)
}).$mount('#app')
