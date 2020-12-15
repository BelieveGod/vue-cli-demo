<template>
  <video-stream></video-stream>
</template>

<script>
  // import axios from 'axios'
  import videoStream from './components/videoPlay';

export default {
  name: 'App',
  components:{
    videoStream
  },
  data(){
    return {

    }
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

</style>
