import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    name: 'Naruto'
  },
  getters,
  mutations,
  actions,
})

export default store;
