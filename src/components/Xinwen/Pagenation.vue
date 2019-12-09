<template>
  <p class="pagenation">
    <a :href="baseUrl">首页</a>
    <a :href="baseUrl + prePage">上一页</a>
    <a :href="baseUrl + (index + 1)" v-for="(item,index) in pages" :key="index" :class="{active:curPage-1 == index}">{{item}}</a>
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
    },
    pageLength:{
      type:Number,
      default:5
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
      return Math.ceil(this.totalNews/this.pageLength)
    },
    pages(){
      let arr = []
      let i = 0
      //根据 pageLength 的奇偶性分两种情况来讨论
      if(this.pageLength % 2 != 0){
        console.log("pageLength 为奇数");
        arr[0] = this.curPage
        do {
          if (this.curPage - i > 1) {
            arr.unshift(this.curPage - i - 1)
          }
          if(arr.length == Math.min(this.pageLength, this.totalPage)) break
          if (this.curPage + i < this.totalPage ) {
            arr.push(this.curPage + i + 1)
          }
          i++
        } while (arr.length < Math.min(this.pageLength, this.totalPage));
      }else{
        console.log("pageLength 为偶数");
        do {
          if (this.curPage - i >= 1) {
            arr.unshift(this.curPage - i)
          }
          if (this.curPage + i <= this.totalPage) {
            arr.push(this.curPage + i + 1)
          }
          i++
        } while (arr.length <= Math.min(this.pageLength, this.totalPage));
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