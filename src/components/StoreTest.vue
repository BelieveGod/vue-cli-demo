<template>
  <div>
    <div>name:{{ name }}</div>
    <div>reverseName:{{reverseName }}</div>
    <div>reverseName:{{reverseName2(3) }}</div>
    <el-button type="primary" @click="changeName({name:'James'})">changeName</el-button>
    <el-button type="warning" @click="changeNameDelay({name:'Kobe'})">changeNameDelay</el-button>
  </div>
</template>

<script>
  import { mapState,mapGetters ,mapMutations,mapActions } from 'vuex'

  export default {
    name: "StoreTest",
    created() {
    },
    mounted() {
    },
    data(){
      return {

      }
    },
    computed:{
      // mapState 帮助生成vuex 到 计算属性
      ...mapState([
        'name'
      ]),
      ...mapGetters([
        'reverseName',
        'reverseName2',
      ])
    },
    methods:{
      ...mapMutations([
          'changeName'
      ]),
      ...mapActions([
        'changeNameDelay'
      ]),
    },


  }
</script>

<style scoped>

</style>
