/**
 * Vuex 中的 getter 相当于 Vue 中的计算属性 computed
 * @type {{}}
 */
const getters={
   reverseName:(state,getters)=>{
      return state.name.split('').reverse().join('');
   },
   reverseName2:(state,getters)=>(id)=>{
      return id+state.name.split('').reverse().join('');
   },
}

export default getters;


