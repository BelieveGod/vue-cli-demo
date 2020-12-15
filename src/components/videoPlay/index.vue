<template>
  <div>
      <canvas id="canvas"></canvas>
        <button type="primary" @mousedown="moveRobot"   @mouseup="stopRobot">前进</button>
        <button type="primary" @mousedown="moveRobot"   @mouseup="stopRobot">后退</button>
        <button type="primary" @mousedown="moveRobot"   @mouseup="stopRobot">左转</button>
        <button type="primary" @mousedown="moveRobot"   @mouseup="stopRobot">右转</button>
  </div>
</template>

<script>
  // import JSMpeg from './jsmpeg.min';
  import JSMpeg from "@/assets/jsmpeg.min";
  import {robotMove} from './robotApi'

  export default {
    name: "index",
    data(){
      return {
        player:'',
        moveStatus:false
      }
    },
    mounted(){
      this.player = new JSMpeg.Player('ws://localhost:9999', {
        canvas: document.getElementById('canvas') // Canvas should be a canvas DOM element
      })
    },
    methods:{
      stopRobot(){
        // 双重保险停车
        this.moveStatus=false
      // todo 停止机器人
        console.log('stop ...')
        const speed = {
          linearSpeed: 0,
          angularSpeed: 0
        }

        robotMove({ speed }).then((resp) => {
          console.log('stop', resp.data)
        })
      },
      moveRobot(){
        // todo 移动机器人
        console.log('move ...')
        const speed = {
          linearSpeed: 0.1,
          angularSpeed: 0
        }
        this.moveStatus=true
        robotMove({ speed }).then((resp) => {
          console.log('start', resp.data)
          if(this.moveStatus){
            this.moveRobot()
          }
        })
      },


    }
  }
</script>

<style scoped>

</style>
