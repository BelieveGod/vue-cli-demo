<template>
  <div>
    <div><i id="a" ref="a">{{a}}</i></div>
    <el-button @click="testTick">测试tick</el-button>
  </div>

</template>

<script>
  export default {
    name: "NextTickTest",
    data() {
      return {
        a: 11
      }
    },
    mounted() {

    },
    methods:{
      testTick(){
        let time_start = Date.now()
        consoleData('初始状态')
        console.log(this.$refs['a']);
        // 两秒后修改a的值
        setTimeout(() => {
          console.log('（2s后修改a的值）')
          this.a = 22222
          // console.log(this.$refs['a']);
          // consoleData('修改后马上获取')
          syncAwait()
          this.$nextTick(function () {
            consoleData('nextTick里获取')
            // console.log(this.$refs['a']);
            console.log('（此时更新了Dom，但视图未渲染）')
            syncAwait()
            consoleData('执行完nextTick')
            console.log('（执行完该任务队列，渲染视图）')
          })
        }, 2000)
        // 打印元素的内容与宽度
        function consoleData(title) {
          let ele = document.getElementById('a');
          const text=ele.innerText;
          let width = window.getComputedStyle(ele).width;
          let width2 = ele.getBoundingClientRect().width;
          console.log(`${Date.now() - time_start}ms,${title}:值为${text},宽度为${width2}`);
        }
        // 模拟两秒的同步代码执行
        function syncAwait(time = 2000) {
          console.log('执行2s的同步代码')
          const startTime = Date.now();
          while (true) {
            if (Date.now() - startTime > time) { break; }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
