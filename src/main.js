import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'
const store = createStore({
    state(){
        return{
            counter: 0,
            histories: []
        }
    },

    mutations: {
        addCounter(state, payload){
            state.counter += payload
            state.histories.push(state.counter)
        },
        
        subCounter(state, payload){
            state.counter -= payload
            state.histories.push(state.counter)
        }
    },

    actions: {
        async addRandomNumber(context){
            const res = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
            if(res.data){
                context.commit('addCounter', res.data)
            }
        }
    },

    getters: {

    }
})
const app = createApp(App)
app.use(store)
// app.use(axios)
app.mount('#app')