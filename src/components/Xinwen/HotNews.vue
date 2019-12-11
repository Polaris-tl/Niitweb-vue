<template>
  <div class="part1">
    <p class="partname" :style="{color:this.$store.state.color}">当月热门文章</p>
    <div class="box">
      <ul>
        <a  :key="index" v-for="(item,index) in hotnews">
          <li class="clearfix">
            <p :style="{color:$store.state.color}">{{item.title}}</p>
            <img src="./images/detail/1057-1.jpg" alt="" />
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return({
      hotnews:[
        {
          title:"NIIT与贵州大学签订校企合作协议"
        },
        {
          title:"刘慧会见印度国家信息技术学院代表团一行"
        },
        {
          title:"NIIT与宁夏师范学院签署合作办学协议"
        },
        {
          title:"大数据与计算机科学学院与NIIT共建大数据特色专业座谈交流会举行"
        },
        {
          title:"NIIT项目鼎力合作，人才培养举足轻重"
        },
      ]
      })
  },
}
</script>

<style lang="less" scoped>
  .part1{
    .partname{
        font-size: 19px;
        color: #525252;
        margin-bottom: 12px;
      }
        .box{
          padding: 15px;
          border: solid 1px #dedede;
          font-size: 12px;
          ul li{
            margin-bottom: 20px;
            position: relative;
            left: 0;
            transition: 0.3s left ease;
            &:hover{
              left: 6px;
              color: #ff4545;
            }
          }
          p{
            float: left;
            width: 127px;
            margin-right: 15px;
          }
          img{
            float: left;
            width: 80px;
            height: 47px;
          }
        }
      }
</style>