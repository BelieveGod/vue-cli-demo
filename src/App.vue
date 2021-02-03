<template>
<div >
    <h1>vue-router 示例</h1>
    <p>
        <router-link to="/home">go home</router-link>
        <router-link to="/page1">go home</router-link>
        <router-link to="/page2">go home</router-link>
        <router-link to="/user/2">go user</router-link>
        <router-link to="/user/2/profile">go user</router-link>
        <router-link to="/user/2/posts">go user</router-link>
    </p>
    <p>
        <el-button @click="toUser">go User</el-button>
    </p>
    <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'App',
  components:{
  },
  data(){
    return {
    }
  },
  computed:{


  },
  methods:{
      toUser(){
          this.$router.push('/user/2')
      }
  },
  mounted() {

  },
}
</script>

<style>
  .map {
    height: 400px;
    width: 100%;
  }

  .myBox{
    height: 400px;
    width: 400px;
    background-color: aqua;
  }

</style>
