<template>
  <div>
    <div class="luxian">
        <div class="banner">
          <img src="./images/banner.png" alt="" />
        </div>
        <div class="content clearfix">
            <p>学院地址</p>
            <div class="left">
                <ul>
                    <li class="clearfix">
                        <img src="./images/dz.png" alt="" />
                        <div>
                            <p class="p1">学院地址</p>
                            <p class="p2">重庆市两江新区大竹林华山南路16号</p>
                        </div>
                    </li>
                    <li class="clearfix">
                          <img src="./images/dh.png" alt="" />
                          <div>
                              <p class="p1">联系电话</p>
                              <p class="p2">023 - 6356 1996</p>
                          </div>
                      </li>
                      <li class="clearfix">
                          <img src="./images/yx.png" alt="" />
                          <div>
                              <p class="p1">邮箱</p>
                              <p class="p2">niit@niit.com</p>
                          </div>
                      </li>
                </ul>
            </div>
            <div class="right">
                  <div style="width:674px,height:420px,border:#ccc solid 1px,fontSize:12px" id="map">
                      <baidu-map class="bmView" :scroll-wheel-zoom="true" :center="location" :zoom="zoom" >
                        <bm-view style="width: 100%; height:420px; flex: 1"></bm-view>
                        <bm-marker :position="{lng: 106.472458, lat: 29.6321}" :dragging="true">
                          <bm-label content="Niit重庆互联网学院" :labelStyle="{color: 'red', fontSize : '19px'}" :offset="{width: -66, height: 30}"/>
                        </bm-marker>
                      </baidu-map>
                  </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap,{
  ak:"NIVFyGIbV6pjrFDxQd7kLvLCnhCOwegc"
})

export default {
  name:'Luxian',
  data() {
    return {
      location: {
        lng: 106.472458,
        lat: 29.6321
      },
      zoom: 15,
    };
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>
.luxian{
  .banner {
    width: 100%;
    overflow: hidden;
    img {
      width: 1920px;
      position: relative;
      left: 50%;
      margin-left: -960px;
    }
  }
  .content {
    padding-top: 30px;
    padding-bottom: 30px;
    width: 1080px;
    margin: auto;
    > p {
      font-size: 22px;
      color: #656565;
      font-weight: bold;
      line-height: 1.2;
      width: 130px;
      margin: auto;
      text-align: center;
      position: relative;
      margin-bottom: 33px;
      &:after{
        content: '';
        width: 90px;
        height: 1px;
        background-color: #9a9a9a;
        position: absolute;
        right: -85px;
        bottom: 0px;
        margin: auto;
      }
      &:before {
        content: '';
        width: 90px;
        height: 1px;
        background-color: #9a9a9a;
        position: absolute;
        left: -85px;
        bottom: 0px;
        margin: auto;
      }
    }
    .left {
      float: left;
      width: 339px;
      ul {
        background: #f3f3f3;
        padding: 16px;
        li {
          height: 77px;
          border-bottom: 1px solid #fff;
          padding-top: 10px;
          padding-bottom: 10px;
          img {
            float: left;
            width: 50px;
            height: 50px;
            position: relative;
            top: 50%;
            -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
            border-right: 2px solid #d6d6d6;
          }
          div {
            float: left;
            width: 243px;
            position: relative;
            top: 50%;
            -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
            margin-left: 10px;
            .p1 {
              font-size: 16px;
              color: #656673;
              line-height: 1.05;
            }
            .p2 {
              font-size: 14px;
              color: #737373;
            }
          }
        }
      }
    }
    .right {
      margin-left: 40px;
      float: left;
      width: 694px;
      height: 420px;
    }
  }
}


</style>