<template>
  <!--模板一： 此模板生成带具体URL的pagenation 型如
  <a href="baseUrl/1">
  <a href="baseUrl/2">
  ... -->
  <!-- <p class="pagenation">
    <a :href="baseUrl">首页</a>
    <a :href="baseUrl + prePage" :class="{disable:curPage == 1}">上一页</a>
    <a :href="baseUrl + (item)" v-for="(item,index) in pages" :key="index" :class="{active:curPage == item}">{{item}}</a>
    <a :href="baseUrl + nextPage" :class="{disable:curPage == totalPage}">下一页</a>
    <a :href="baseUrl + totalPage">尾页</a>
  </p> -->
  <!-- 模板一结束 -->

  
  <!--模板二： 此模板生成调用父组件方法的pagenation 型如
  <a @click="update(item)">
  <a @click="update(item)">
  ... -->
  <p class="pagenation">
    <a @click.prevent="update(1)">首页</a>
    <a :class="{disable:curPage == 1}" @click.prevent="update(prePage)">上一页</a>
    <a v-for="(item,index) in pages" :key="index" :class="{active:curPage == item}" @click.prevent="update(item)">{{item}}</a>
    <a :class="{disable:curPage == totalPage}" @click.prevent="update(nextPage)">下一页</a>
    <a @click.prevent="update(totalPage)">尾页</a>
  </p>
</template>

<script>
export default {
  props:{
    curPage: {  //当前页码
        type: Number,
        default: 1
    },
    totalNews: { //总新闻条数
        type: Number,
        required: true,
    },
    baseUrl:{  //根路径
      type:String,
      default:'/'
    },
    newsPerPage:{ //每页展示的新闻数量
      type:Number,
      required:true
    },
    MaxButtonNumberPerPage:{  //每页最大渲染pageButton数量
      type:Number,
      default:5
    }
  },
  computed:{
    //上一页的路径
    prePage:function(){
      return this.curPage - 1 < 1 ? 1 : this.curPage - 1
    },
    //下一页的路径
    nextPage:function(){
      return this.curPage + 1 > this.totalPage ?  this.totalPage : this.curPage + 1
    },
    //新闻总共能分成的页数
    totalPage(){
      return Math.ceil(this.totalNews/this.newsPerPage)
    },
    //储存新闻路径的数组 (不含baseUrl)
    pages(){
      let arr = []
      let i = 0
      if(this.curPage > this.totalPage) return arr
      if(this.curPage < 1) return arr
      //根据 MaxButtonNumberPerPage 的奇偶性分两种情况来讨论
      //为奇数时
      if(this.MaxButtonNumberPerPage % 2 != 0){
        arr[0] = this.curPage
        do {
          if (this.curPage - i > 1) {
            arr.unshift(this.curPage - i - 1)
          }
          if(arr.length == Math.min(this.MaxButtonNumberPerPage, this.totalPage)) break
          if (this.curPage + i < this.totalPage ) {
            arr.push(this.curPage + i + 1)
          }
          i++
        } while (arr.length < Math.min(this.MaxButtonNumberPerPage, this.totalPage));
      }else{
        //为偶数时
        do {
          if (this.curPage - i >= 1) {
            arr.unshift(this.curPage - i)
          }
          if (this.curPage + i < this.totalPage) {
            arr.push(this.curPage + i + 1)
          }
          i++
        } while (arr.length < Math.min(this.MaxButtonNumberPerPage, this.totalPage));
      }
      return arr
    }
  },
  methods:{
    // 仅在使用模板二时开启此方法
    update(v){
      this.$emit('update:curPage', v);
    }
  }
}
</script>

<style lang="less" scoped>
  .pagenation{
    text-align: center;
    margin-bottom: 20px;
    a{
      padding: 4px 10px;
      border: solid 1px #eee;
      display: inline-block;
      color: #9d9896;
      margin-right: 16px;
      border-radius: 2px;
      font-size: 12px;
    }
    .active{
      background-color: #e1243a;
      color: #fff;
    }
    .disable{
      color: #dadada;
      // cursor: not-allowed;
    }
  }
</style>