<template>
  <div>
  <ul>
    <li class="clearfix" v-for="(item,index) in content" v-bind:key="index">
      <img src="./images/detail/1056-1.jpg" alt />
      <div class="li-right">
        <p class="p1" :style="{color:$store.state.color}"><router-link :to="{name:'detail',params:{id:item.news_id}}">{{item.title}}</router-link></p>
        <p class="p2" :style="{color:$store.state.color}">{{item.content}}</p>
        <p class="p3" :style="{color:$store.state.color}">{{item.time}} | 作者：{{item.author}} | 来源：{{item.from}}</p>
      </div>
    </li>
  </ul>
  <Pagenation :curPage="curPage" :totalNews="totalNews" :baseUrl="baseUrl" :MaxButtonNumberPerPage="MaxButtonNumberPerPage" :newsPerPage="newsPerPage" @update:curPage="methodFromFather"/>
  </div>
</template>

<script>
import Pagenation from "./Pagenation"
export default {
  data: function() {
    return {
      cur: 1,
      totalNews:70,
      curPage:1,
      MaxButtonNumberPerPage:5,
      newsPerPage:10,
      baseUrl:'/xinwen/',
      content: [
        {
          title: "新闻1111111",
          content:
            "9月5日下午，印度国家信息技术学院（NIIT）·宁夏师范学院合作交流座谈会在宁夏师范学院古雁校区办公楼第一会议室举行。印度国家信息技术学院中国区总裁Kamal Dhuper，中国区技术总监、西北地区总监，宁夏师范学院校长马宗保、纪委书记虎玉赟，及学校对外合作交流处负责人等参加了座谈会。",
          time: "09-06",
          author: "admin",
          from: "重庆互联网学院",
          img_url: "./images/detail/1056-1.jpg",
          news_id: "1"
        },
        {
          title: "新闻22222222",
          content:
            "9月5日下午，印度国家信息技术学院（NIIT）·宁夏师范学院合作交流座谈会在宁夏师范学院古雁校区办公楼第一会议室举行。印度国家信息技术学院中国区总裁Kamal Dhuper，中国区技术总监、西北地区总监，宁夏师范学院校长马宗保、纪委书记虎玉赟，及学校对外合作交流处负责人等参加了座谈会。",
          time: "09-06",
          author: "admin",
          from: "重庆互联网学院",
          img_url: "./images/detail/1057-1.jpg",
          news_id: "2"
        },
        {
          title: "新闻3333333",
          content:
            "9月5日下午，印度国家信息技术学院（NIIT）·宁夏师范学院合作交流座谈会在宁夏师范学院古雁校区办公楼第一会议室举行。印度国家信息技术学院中国区总裁Kamal Dhuper，中国区技术总监、西北地区总监，宁夏师范学院校长马宗保、纪委书记虎玉赟，及学校对外合作交流处负责人等参加了座谈会。",
          time: "09-06",
          author: "admin",
          from: "重庆互联网学院",
          img_url: "./images/detail/1058-1.jpg",
          news_id: "3"
        }
      ]
    };
  },
  components:{
    Pagenation,
  },
  methods:{
    methodFromFather(v){
      console.log("模拟发起请求，参数：" + v)
      this.curPage = v
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  margin: 5px 0;
  li {
    padding: 24px 0;
    // border-bottom: solid 1px #eee;
    border-top: solid 1px #eee;
    &:hover {
      .li-right .p1 a{
        color: #ff4545;
      }
    }
    img {
      float: left;
      width: 180px;
      height: 120px;
      margin-right: 20px;
    }
    .li-right {
      float: left;
      width: 686px;
      .p1 {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
      }
      .p2 {
        color: #999999;
        font-size: 14px;
        text-align: justify;
        text-indent: 28px;
        margin: 5px 0 12px 0;
      }
      .p3 {
        color: #8e8e8e;
        position: relative;
        margin-left: 28px;
        &:before {
          content: "";
          width: 20px;
          height: 20px;
          background-image: url(./images/time.png);
          position: absolute;
          left: -29px;
          top: -1px;
          background-size: 100%;
        }
      }
    }
  }
}
</style>