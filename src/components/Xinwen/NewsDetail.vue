<template>
  <div class="artical">
    <p class="title">id为：{{id}}的标题</p>
    <p class="info">
      <span>id为：来源：{{id}}的来源</span>
      <span>id为：时间：{{id}}的时间</span>
      <span>id为：浏览：{{id}}的浏览量</span>
      <span>id为：作者：admin</span>
    </p>
    <div class="neirong">
      <p>id为：{{id}}的内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id:this.$route.params.id
    };
  },
  mounted(){
    alert("加载数据")
  }
};
</script>

<style lang="less" scoped>
.artical{
    padding: 40px 20px;
    .title{
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      color: #545454;
      margin-bottom: 11px;
    }
    .info{
      font-size: 12px;
      text-align: center;
      margin-bottom: 36px;
      span{
        margin-right: 20px;
        color: #949494;
      }
    }
    .neirong{
      min-height: 660px;
      line-height: 2.4;
      font-size: 16px;
      color: #525252;
      text-align: justify;
      text-indent: 30px;
      img{
        width: 400px;
        height: auto;
        float: none;
        margin: auto;
        margin-bottom: 23px;
        display: block;
        margin-top: 20px;
      }
    }
  }
</style>