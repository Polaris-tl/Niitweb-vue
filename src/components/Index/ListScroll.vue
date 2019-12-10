<template>
  <div>
    <ul ref="wrap">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <slot />
  </div>
</template>

<script>
export default {
  mounted(){
    console.dir(this.$slots.default[0].elm)
    this.scroll(this.$refs.wrap)
  },
  methods:{
    scroll(_this,opt) {
      let defaults={
          line:1, //一次滚动几行
          speed:800,  //滚动动画速度
          timer:2500, //滚动时间间隔
          ease:'ease' //css动画曲线
      };
      let opts = Object.assign({}, defaults, opt);
      let {line,speed,timer,ease} = opts
      let li = _this.firstChild
      let computedStyle = null
      if (window.getComputedStyle){
        computedStyle = window.getComputedStyle(li, null);
      }else{
        computedStyle = li.currentStyle;
      }
      let liHeight = parseInt(li.offsetHeight) + parseInt(computedStyle.marginTop) + parseInt(computedStyle.marginBottom)
      //滚动函数开始
      let scrollDistance = 0 - line * liHeight;
      let timerId = null;
      function move(){
        _this.style.marginTop = scrollDistance + 'px'
        _this.style.transition = `all ${speed}ms ${ease}`
      }
      function start() {
        timerId = setInterval(move,timer)
        _this.addEventListener('transitionend',function(){
          for (let i = 1; i <= line; i++) {
            _this.appendChild(_this.firstChild)
          }
          _this.style.transition = ''
          _this.style.marginTop = 0 + 'px'
        })
      }
      start()
      //监听事件
      _this.addEventListener('mouseover',function(){
        clearInterval(timerId)
      })
      _this.addEventListener('mouseout',function(){
        timerId = setInterval(move,timer)
      })
    }
  }
}
</script>

<style scoped>
div{
  height: 100px;
  overflow: hidden;
}
ul{
  text-align: center;
}
li{
  height: 25px;
  line-height: 25px;
  padding: 4px 0;
}
</style>