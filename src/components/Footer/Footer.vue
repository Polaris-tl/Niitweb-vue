<template>
  <div class="bottom clearfix">
    <div>
      <div class="left fl">
        <div class="clearfix">
          <img src="./images/logo-w.png" alt="" class="fl" />
          <div class="fl div1">
            <p class="p1">NIIT重庆互联网学院</p>
            <p class="p2">CHONGQING INTERNET INSTITUTE</p>
          </div>
        </div>
        <div class="tel">
          <p>招生热线：023-63561996<span>咨询时间：09：00-23：00</span></p>
          <p>Copyright © 2019 NIIT 版权所有 渝ICP备12002243号</p>
        </div>
      </div>
      <div class="mid fl">
        <ul class="clearfix">
          <li><a href="/">首页</a></li>
          <li><a href="/jianjie">学校简介</a></li>
          <li><a href="/shizi" >师资力量</a></li>
          <li><a href="/zhuanye" >开设专业</a></li>
          <li><a href="/xinwen" >学校新闻</a></li>
          <li><a href="/xueyuan" >就业学员</a></li>
          <li><a href="/luxian"  >来校路线</a></li>
        </ul>
        <p>
          学校地址：重庆两江新区大竹林华山南路16号<span>商业沟通：niit@niit.com</span>
        </p>
      </div>
      <div class="right fr">
        <ul class="clearfix">
          <li>
            <div class="code"><img src="./images/qrcode.png" alt="" /></div>
            <img src="./images/wx2.png" alt="" />
            <p>微信</p>
          </li>
          <li>
            <div class="code"><img src="./images/qrcode.png" alt="" /></div>
            <img src="./images/qq2.png" alt="" />
            <p>QQ</p>
          </li>
          <li>
            <div class="code"><img src="./images/qrcode.png" alt="" /></div>
            <img src="./images/pho2.png" alt="" />
            <p>客服电话</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Footer',
}
</script>

<style lang="less">
.bottom{
  background-color: #3e3e3e;
  padding: 20px 0 10px 0;
  font-size: 12px;
  > div{width: 1200px;margin:auto}
  .left{
    width: 305px;
    .div1{
      margin-left: 10px;
      color: #d4d4d4;
      position: relative;
      top: -5px;
      .p1{font-size: 18px;}
      .p2{line-height: 10px;}
    }
    .tel{
      color:#d4d4d4;
      p{
        margin-top: 10px;
      }
      span{
        margin-left: 15px;
      }
    }
  }
  .mid{
    margin-left: 55px;
    ul{    margin-top: 10px;}
    ul li{
      float: left;
      &:not(:last-child) {
         margin-right: 28px;
      }
      font-size: 14px;
      a{color: #d4d4d4;}
    }
    .active{
      font-weight: bold;
      color: #ffffff
    }
    p{
      margin-top: 15px;
      color: #d4d4d4;
      span{margin-left: 32px;}
    }
  }
  .right{
    margin-top: 20px;
    ul{
      width: 215px;
      margin-left: 15px;
      li{
        float: left;
        position: relative;
        width: 33%;
        text-align: center;
        color: #d4d4d4;
        &:hover{
          .code{
            opacity: 1;
          }
        }
        img{
          width: 30px;
        }
        .code{
          transition: 0.4s ease all;
          opacity: 0;
          top: -98px;
          left: -10px;
          right: 0;
          margin: auto;
          width: 71px;
          position: absolute;
          border: #FFF 7px solid;
          box-shadow: 0 0 6px #3a3a3a6b;
          img{
            width: 71px;
          }
          &:after{
            content: '';
            position: absolute;
            border-top: 8px white solid;
            border-left: 8px transparent solid;
            border-bottom: 8px transparent solid;
            border-right: 8px transparent solid;
            left: 26px;
            bottom: -23px;
          }
        }
      }
    }
  }
}
</style>