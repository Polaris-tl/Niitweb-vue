<template>
  <div :is="tagName">
    <slot />
  </div>
</template>

<script>

// 使用方法
// <listScroll class="yourClassName" :line="1" :speed="600" :timer="2000" :ease="linear">
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//     <li>6</li>
//     <li>7</li>
//   </ul>
// </listScroll>
// 注意事项
// 如果父组件样式加了 scoped ，那么需要在父组件对应样式前设置 /deep/ 或 >>> 来实现 样式传递

export default {
  name:"listScroll",
  props:{
    line:{//一次滚动几行
      type:Number,
      default:1
    },
    speed:{//滚动动画速度
      type:Number,
      default:800
    },
    timer:{//滚动时间间隔
      type:Number,
      default:2500
    },
    ease:{//css动画曲线
      type:String,
      default:'ease'
    },
    tagName:{
      type:String,
      default:'div'
    }
  },
  mounted(){
    this.scroll(this.$slots.default[0].elm)
  },
  methods:{
    scroll(_this) {
      let {line,speed,timer,ease} = this
      let li = _this.firstChild
      if(!li) return
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
