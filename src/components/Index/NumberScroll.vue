<template>
  <span :is="tagName" ref="domNode">{{number}}</span>
</template>

<script>
export default {
  props:{
    tagName:{ //输出包裹数字的标签
      type:String,
      default:'span'
    },
    number:{  //传递进来的数字
      type:Number,
      required:true,
    },
    duration:{ //动画持续时间
      type:Number,
      default:1000
    }
  },
  mounted(){
    this.numberScroll(this.$refs.domNode,{
      number: this.number,
      duration: this.duration,
    })
  },
  methods:{
    numberScroll:function(_this,options){
        var defaults={
            number:100,
            duration:1500,
        };
        var opts = Object.assign({}, defaults, options);
        var step = 1
        var interval = 10
        var timmer = setInterval(function(){
          // 计算公式
          // 从零开始，先算出平局每毫秒需要增加的值，再乘以定时器时间间隔interval，然后通过step变量一步步增加数字，直到数字 >= opts.number
          _this.innerHTML = parseInt((opts.number/opts.duration)*interval*step)
          step++
          if (Number(_this.innerHTML) >= Number(opts.number)) {
            clearInterval(timmer)
            //确保最后数字正确
            _this.innerHTML = opts.number
          }
        },interval)
    }
  }
}
</script>