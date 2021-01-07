<template>
  <div>
    <span>{{ this.$store.state.count}}</span>
    <el-button @click="increase">增加</el-button>
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
  methods:{
    increase(){
      this.$store.commit('increment');
      console.log(this.$store.state.count)
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

</style>
