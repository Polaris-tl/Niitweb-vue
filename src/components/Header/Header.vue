<template>
  <div>
  <div class="top">
          <img src="./images/top.png" alt="" />
        </div>
        <div class="nav">
          <div class="left fl">
            <img src="./images/logo.png" alt="" />
            <p class="p1">
              <span>重庆互联网学院</span>
              <span>CHONGQING INTERNET INSTITUTE</span>
            </p>
            <p class="p2">
              <span>38年</span>
              <span>成立自1981年</span>
            </p>
          </div>
          <div class="right fr">
            <ul class="clearfix">
              <li><router-link style="text-decoration:none" to="/" exact>首页</router-link></li>
              <li><router-link style="text-decoration:none" to="/jianjie">学校简介</router-link></li>
              <li><router-link style="text-decoration:none" to="/shizhi" >师资力量</router-link></li>
              <li><router-link style="text-decoration:none" to="/zhuanye" >开设专业</router-link></li>
              <li><router-link style="text-decoration:none" to="/xinwen">学校新闻</router-link></li>
              <li><router-link style="text-decoration:none" to="/xueyuan" >就业学员</router-link></li>
              <li><router-link style="text-decoration:none" to="/luxian" >来校路线</router-link></li>
            </ul>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="less">

.top {
  width : 1200px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}

.nav {
  width   : 1200px;
  margin  : 19px auto;
  overflow: hidden;

  .left {
    img {
      width   : 64px;
      height  : auto;
      margin  : auto;
      position: relative;
      top     : -10px;
    }

    .p1 {
      margin-left  : 5px;
      padding-right: 20px;
      ;
      display     : inline-block;
      border-right: 2px solid #bfbfbf;

      span {
        font-size     : 12px;
        font-family   : "Microsoft YaHei";
        color         : #969696;
        letter-spacing: 0px;

        &:first-of-type {
          font-size     : 24px;
          display       : block;
          font-family   : "Microsoft YaHei";
          color         : #0054a7;
          font-weight   : bold;
          letter-spacing: 5.8px;
        }
      }
    }

    .p2 {
      margin-left  : 20px;
      padding-right: 20px;
      ;
      display: inline-block;

      span {
        font-size  : 16px;
        font-family: "Microsoft YaHei";
        color      : #969696;

        &:first-of-type {
          display  : block;
          font-size: 20px;
          color    : #0054a7;
        }
      }
    }
  }

  .right {
    ul {
      display    : inline-block;
      line-height: 56px;
      font-size  : 16px;
      color      : #505050;

      .active {
        a {
          color: #0054a7
        }
        border-bottom: 2px solid #0054a7;
      }

      li {
        float  : left;
        margin : 0px 13px;
        padding: 0px 3px;
        a{
          line-height: 56px;
          height: 56px;
          display: block;
          box-sizing: border-box;
        }
        &:hover {
          a{
            color        : #0054a7;
            border-bottom: 2px solid #0054a7;
          }
        }
      }
    }
  }
}

</style>