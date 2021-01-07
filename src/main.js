import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// store.commit('increment')

console.log(store.state.count)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
