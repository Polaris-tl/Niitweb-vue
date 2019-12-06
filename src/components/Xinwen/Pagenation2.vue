<template>
  <p class="pagenation">
    <a :href="baseUrl">首页</a>
    <a :href="baseUrl + prePage">上一页</a>
    <a :href="baseUrl + (index + 1)" v-for="(item,index) in showPages" :key="index">{{item}}</a>
    <a :href="baseUrl + nextPage">下一页</a>
    <a :href="baseUrl + totalPage">尾页</a>
  </p>
</template>

<script>
export default {
  props:{
    curPage: {
        type: Number,
        default: 1
    },
    totalNews: {
        type: Number,
        required: true,
    },
    baseUrl:{
      type:String,
      default:'/'
    }
  },
  data(){
    return{
      pageSize:5
    }
  },
  computed:{
    prePage:function(){
      return this.curPage - 1 < 1 ? 1 : this.curPage - 1
    },
    nextPage:function(){
      return this.curPage + 1 > this.totalPage ?  this.totalPage : this.curPage + 1
    },
    totalPage(){
      return Math.ceil(this.totalNews/this.pageSize)
    },
    showPages(){
      if(Math.ceil(this.totalNews/this.pageSize) <= this.pageSize) return Math.ceil(this.totalNews/this.pageSize)
      let arr = []
      for(let i = 1;i <= this.pageSize;i++){
        arr.push(this.curPage + i)
      }
      return arr
    }
  },
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
  }
</style>