<template>
  <div>
    <store-test></store-test>
    <next-tick-test></next-tick-test>
  </div>

</template>

<script>
  import StoreTest from '@/components/StoreTest';
  import NextTickTest from '@/components/NextTickTest';
export default {
  name: 'App',
  components:{
    StoreTest,
    NextTickTest,
  },
  data(){
    return {
    }
  },
  computed:{


  },
  methods:{
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
