<template>
  <p class="pagenation">
    <a :href="baseUrl">首页</a>
    <a :href="baseUrl + prePage">上一页</a>
    <a :href="baseUrl + (index + 1)" v-for="(item,index) in showPages" :key="index" :class="{active : item.isCur}">{{item.url}}</a>
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
      // 方法一
      // let arr = []
      // for(let i = 0;i < this.pageSize;i++){
      //   if (i != this.curPage){
      //     arr.push({
      //       iscur:false,
      //       url:this.curPage + i
      //     })
      //   }
      //   else{
      //     arr.push({
      //       isCur:true,
      //       url:this.curPage + i
      //     })
      //   }
        
      // }
      // return arr
      //方法二
      let arr = []
      let i = 0
      while(arr.length <= Math.min(5,this.totalPage) ){
        if(this.curPage - i > 0){
          arr.unshift(this.curPage - i)
        }
        else if(this.curPage - i > this.totalPage){
          arr.push(this.curPage + i)
        }
        i++
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