<template>
  <div class="xinwen">
    <div class="banner">
      <img src="./images/banner.png" alt />
    </div>
    <div class="content clearfix">
      <div class="left fl">
        <router-view />
        <div :style="{color:this.$store.state.color}">{{this.$store.getters.color}}
          <input type="color" @change="handleChange" :value="this.$store.state.color"/>
          <hr />
          dispatch异步设置color为红色 =>Promise
          <button  @click="handleClick" >开始</button>
          <hr />
          dispatch异步设置color为蓝色 =>Asyn/Await
          <button  @click="handleClick2" >开始</button>
          <hr />
          <p>颜色改变中：{{this.$store.state.loading}}</p>
        </div>
      </div>
      <div class="right fl">
        <HotNews />
        <div class="part2">
          <p class="partname">热门话题</p>
          <div>
            <a href="#">
              <span>游戏设计</span>
            </a>
            <a href="#">
              <span>NIIT</span>
            </a>
            <a href="#">
              <span>小程序制作</span>
            </a>
            <a href="#">
              <span>网页设计开发</span>
            </a>
            <a href="#">
              <span>软件工程师</span>
            </a>
            <a href="#">
              <span>平面UI工资怎样？</span>
            </a>
            <a href="#">
              <span>我毕业后能得到些什么？</span>
            </a>
            <a href="#">
              <span>游戏开发</span>
            </a>
            <a href="#">
              <span>CG</span>
            </a>
          </div>
        </div>
        <div class="part3">
          <p class="partname">
            常见问题
            <a href="#">
              <span class="fr more">More>></span>
            </a>
          </p>
          <div class="box">
            <ul>
              <li>
                <a href="#">
                  <p>[问] 学习云计算将来有什么就业前景？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>[问] 初中毕业上课能听懂吗？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>[问] IT专业适合女生就读吗？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>[问] 你们说的包分配工作是真的吗？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>[问] 有没有人工智能相关的课程？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>[问] 你们的学费大概多少？</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>[问] 毕业后是否能拿到文凭？</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HotNews from "./HotNews"
export default {
  name: "Xinwen",
  data:function(){
    return {}
  },
  components: {
    HotNews,
  },
  methods:{
    handleChange(e){
      this.$store.commit('changecolor',e.target.value)
    },
    handleClick(){
      this.$store.dispatch('changecolorAsyn',"red")
      .then(() => {
        alert("恭喜你，你变红了！")
      })
    },
    handleClick2(){
      this.$store.dispatch('changecolorAsyn2',"blue")
      .then(() => {
        alert("恭喜你，你变蓝了！")
      })
      
    }
  }
};
</script>

<style lang="less" scoped>
button{
      display: inline-block;
    height: 32px;
    width: 93px;
    background: #55c0ff;
    box-shadow: none;
    border: none;
    border-radius: 4px;
    margin: 4px;
    color: #fff;
}
.banner {
  width: 1200px;
  margin: auto;
  img {
    width: 1200px;
    margin: auto;
    display: block;
  }
}
.content {
  width: 1200px;
  margin: auto;
  .left {
    width: 894px;

    .pagenation {
      text-align: center;
      margin-bottom: 20px;
      span {
        padding: 4px 10px;
        border: solid 1px #eee;
        display: inline-block;
        color: #9d9896;
        margin-right: 16px;
        border-radius: 2px;
        &:hover {
          background-color: #e1243a;
          color: #fff;
        }
      }
      .active {
        background-color: #e1243a;
        color: #fff;
      }
    }
  }
  .right {
    width: 255px;
    margin-left: 20px;
    margin-top: 24px;
    .partname {
      font-size: 19px;
      color: #525252;
      margin-bottom: 12px;
    }
    .part2 {
      margin-top: 23px;
      span {
        padding: 5px 14px;
        display: inline-block;
        border: 1px solid #d8d8d8;
        border-radius: 3px;
        margin: 0 5px 6px 0;
        font-size: 14px;
        &:hover {
          border: 1px solid #ffacac;
          color: #ff4545;
        }
      }
    }
    .part3 {
      margin-top: 20px;
      margin-bottom: 27px;
      .more {
        color: #ff1e1e;
        font-size: 12px;
        line-height: 36px;
      }
      .box {
        ul li {
          color: #5f5f5f;
          font-size: 14px;
          margin: 6px 0;
          &:hover {
            a {
              color: #ff1e1e;
            }
          }
        }
      }
    }
  }
}
</style>