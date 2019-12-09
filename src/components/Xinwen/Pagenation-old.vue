<template>
  <p class="pagenation">
    <a href="./xinwen.html">首页</a>
    <a href="javascript:void(0)">上一页</a>
    <a href="./xinwen.html" class="active">1</a>
    <a href="./xinwen-p2.html">2</a>
    <a href="./xinwen-p3.html">3</a>
    <a href="./xinwen-p2.html">下一页</a>
    <a href="./xinwen-p3.html">尾页</a>
  </p>
</template>

<script>
export default {
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