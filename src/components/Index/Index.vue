<template>
  <div>
        <div class="banner">
          <img src="./images/banner.jpg" alt=""/>
        </div>
        <div class="cool">
          <ul class="clearfix">
            <li class="fl">
              <p><NumberScroll :number="38"/><span>年</span></p>
              <p><span>成立自1981年</span></p>
            </li>
            <li class="fl">
              <p><NumberScroll :number="33" /><span>国家</span></p>
              <p><span>遍及33个国家</span></p>
            </li>
            <li class="fl">
              <p><NumberScroll :number="3800"/><span>中心</span></p>
              <p><span>3800所直属分校</span></p>
            </li>
            <li class="fl">
              <p><NumberScroll :number="500"/>万<span>+学员</span></p>
              <p><span>毕业学员500万+人才</span></p>
            </li>
          </ul>
        </div>
        <listScroll>
          <div>asdasd</div>
        </listScroll>
        <div class="section section1">
          <div class="title">
            <p>学院简介</p>
            <span>为莘莘学子改变命运而讲课，为千万学生少走弯路而著书！</span>
          </div>
          <div class="content clearfix">
            <div class="fl box1">
              <div class="video-box">
                <video class="my-video" controls="controls" id="video" src="./images/intro.mp4" width="100%"></video>
                <div class="fake-layer">
                  <img class="snapshot" src="./images/snapshot.png" />
                  <img class="play-button" src="./images/playButton.png" />
                  <div class="text"><span class="video-title">■ NIIT重庆互联网学院简介 </span></div>
                </div>
              </div>
            </div>
            <div class="fr box2">
              <div class="intro-title">
                <p>NIIT重庆互联网学院</p>
                <p>CHONGQING INTERNET INSTITUTE</p>
                <a href="./jianjie.html">更多>></a>
              </div>
              <div class="intro-content">
                <p>NIIT重庆互联网学院隶属于重庆安道教育咨询有限公司，总建筑面积约16万平方米，按照智慧校园、未来生活的理念建设，能同时提供10000名学员的综合学习和2000名学员的住宿及生活配套服务。</p>
                <p>
                  1997年，NIIT进入中国，凭借全球统一的教学模式，高质量的管理体系和与时俱进的课程内容，NIIT迅速成为中国IT职业教育领域的领先者。今天，NIIT已在中国25个省建立了超过183个授权中心，并与各大软件园、IT公司和大学建立了广泛的合作关系，每年都为中国培养大量的专业人才。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section section2">
          <div class="title">
            <p>100%对口就业培养名额</p>
            <span>把高薪就业当做使命，把学生成才作为目标</span>
          </div>
          <div class="content clearfix">
            <div class="left fl">
              <ul class="emply-head clearfix">
                <li>姓名</li>
                <li>学制</li>
                <li>学历</li>
                <li style="width:20%">报读专业</li>
                <li style="width:25%">定向企业</li>
                <li style="width:13%">已报/名额</li>
                <li style="width:18%">学历服务</li>
              </ul>
              <div class="emplyoee">
                <ul class="emply-body clearfix" style="marginTop: 0px">
                  <li>
                    <span>孙*</span>
                    <span>3年制</span>
                    <span>初二</span>
                    <span style="width:20%">嵌入式开发工程师</span>
                    <span style="width:25%">新*讯信息科技有限公司</span>
                    <span style="width:13%">95/103</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li style="backgroundColor: #ececec">
                    <span>张*磊</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style="width:20%">Java软件开发</span>
                    <span style="width:25%">重庆感*科技有限公司</span>
                    <span style="width:13%">26/30</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li>
                    <span>许*硕</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style="width:20%">动漫游戏原画师</span>
                    <span style="width:25%">小*科技有限公司</span>
                    <span style="width:13%">44/60</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li style="backgroundColor: #ececec">
                    <span>曾*</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style="width:20%">Java软件开发工程师</span>
                    <span style="width:25%">华*科技</span>
                    <span style="width:13%">26/30</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li>
                    <span>汤*宇</span>
                    <span>3年制</span>
                    <span>高二</span>
                    <span style="width:20%">Linux系统运维工程师</span>
                    <span style="width:25%">物**云信息科技有限公司</span>
                    <span style="width:13%">52/60</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li style="backgroundColor: #ececec">
                    <span>关*超</span>
                    <span>3年制</span>
                    <span>初三</span>
                    <span style="width:20%">Python人工智能研发</span>
                    <span style="width:25%">重庆影*科技有限公司</span>
                    <span style="width:13%">20/30</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li>
                    <span>黎*善</span>
                    <span>3年制</span>
                    <span>高一</span>
                    <span style="width:20%">嵌入式开发工程师</span>
                    <span style="width:25%">成都生*科技有限公司</span>
                    <span style="width:13%">33/40</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                  <li style="backgroundColor: #ececec">
                    <span>吕*伟</span>
                    <span>3年制</span>
                    <span>高一</span>
                    <span style="width:20%">软件开发</span>
                    <span style="width:25%">美*康*生物科技有限公司</span>
                    <span style="width:13%">39/403</span>
                    <span style="width:18%">中专/大专/本科</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mid fl">
              <div class="head">
                <p>学员就业薪资表</p>
                <p class="more"><a to="./xueyuan">查看更多</a></p>
              </div>
              <div class="data" id="data">
                <ul>
                  <li class="clearfix">
                    <p>陈*力</p>
                    <p>嵌入式开发工程师</p>
                    <p>9000元</p>
                  </li>
                  <li class="clearfix">
                    <p>余天*</p>
                    <p>VR建模设计师</p>
                    <p>8000元</p>
                  </li>
                  <li class="clearfix">
                    <p>杨*平</p>
                    <p>Linux系统运维工程师</p>
                    <p>7500元</p>
                  </li>
                  <li class="clearfix">
                    <p>易*</p>
                    <p>Web前端工程师</p>
                    <p>8000元</p>
                  </li>
                  <li class="clearfix">
                    <p>刘*生</p>
                    <p>java软件开发工程师</p>
                    <p>12000元</p>
                  </li>
                  <li class="clearfix">
                    <p>行**</p>
                    <p>UI设计师</p>
                    <p>7000元</p>
                  </li>
                  <li class="clearfix">
                    <p>宫*旭</p>
                    <p>Web前端工程师</p>
                    <p>9000元</p>
                  </li>
                  <li class="clearfix">
                    <p>童飞*</p>
                    <p>java软件开发工程师</p>
                    <p>9000元</p>
                  </li>
                  <li class="clearfix">
                    <p>棋*美</p>
                    <p>UI设计师</p>
                    <p>8500元</p>
                  </li>
                  <li class="clearfix">
                    <p>鹏*天</p>
                    <p>Web前端工程师</p>
                    <p>8000元</p>
                  </li>
                  <li class="clearfix">
                    <p>白*</p>
                    <p>嵌入式开发工程师</p>
                    <p>11000元</p>
                  </li>
                  <li class="clearfix">
                    <p>阔*里</p>
                    <p>UI设计师</p>
                    <p>9000元</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right fl">
              <div class="head">
                <p>热门专业</p>
              </div>
              <div class="body">
                <div>
                  <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT24214282&lng=cn">
                  <img src="./images/mypi1.png" alt="" />
                  <div class="clearfix">
                    <p class="p1">ARM开发技术</p>
                    <p class="p2">125/人</p>
                  </div>
                  </a>
                </div>
                <div>
                  <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT24214282&lng=cn">
                  <img src="./images/mypi2.png" alt="" />
                  <div class="clearfix">
                    <p class="p1">C语言基础入门</p>
                    <p class="p2">164/人</p>
                  </div>
                </a>
                </div>
                <div>
                  <a href="http://awt.zoosnet.net/LR/Chatpre.aspx?id=AWT24214282&lng=cn">
                  <img src="./images/mypi3.png" alt="" />
                  <div class="clearfix">
                    <p class="p1">数据结构与算法</p>
                    <p class="p2">201/人</p>
                  </div>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section3">
          <div class="title">
            <p>学校环境</p>
            <span>舒适优雅的学习环境，助你学习更轻松！</span>
          </div>
          <div class="opt clearfix" id="opt">
            <span class="active">校园环境</span><span>上课环境</span><span>寝室环境</span>
          </div>
          <div class="pic clearfix" id="pic">
            <div class="xuexiao clearfix">
              <div class="big fl"><img src="./images/xybig.jpg" alt="" /></div>
              <div class="small fl clearfix">
                <div><img src="./images/xy1.jpg" alt="" /></div>
                <div><img src="./images/xy2.jpg" alt="" /></div>
                <div><img src="./images/xy3.jpg" alt="" /></div>
                <div><img src="./images/xy4.jpg" alt="" /></div>
                <div><img src="./images/xy5.jpg" alt="" /></div>
                <div><img src="./images/xy6.jpg" alt="" /></div>
              </div>
            </div>
            <div class="xuexiao">
              <div class="big fl"><img src="./images/skbig.jpg" alt="" /></div>
              <div class="small fl clearfix">
                <div><img src="./images/sk1.jpg" alt="" /></div>
                <div><img src="./images/sk2.jpg" alt="" /></div>
                <div><img src="./images/sk3.jpg" alt="" /></div>
                <div><img src="./images/sk4.jpg" alt="" /></div>
                <div><img src="./images/sk5.jpg" alt="" /></div>
                <div><img src="./images/sk6.jpg" alt="" /></div>
              </div>
            </div>
            <div class="xuexiao">
              <div class="big fl"><img src="./images/qsbig.jpg" alt="" /></div>
              <div class="small fl clearfix">
                <div><img src="./images/qs1.jpg" alt="" /></div>
                <div><img src="./images/qs2.jpg" alt="" /></div>
                <div><img src="./images/qs3.jpg" alt="" /></div>
                <div><img src="./images/qs4.jpg" alt="" /></div>
                <div><img src="./images/qs5.jpg" alt="" /></div>
                <div><img src="./images/qs6.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section4">
          <div class="title">
            <p>学院动态</p>
            <span>我们努力做到最好，是因为这里有千万个怀揣梦想的你们！</span>
          </div>
          <div class="news clearfix">
            <div class="left fl clearfix">
              <ul>
                <li>
                  <p class="p1"><a href="./xinwen/1056.html">印度国家信息技术学院·宁夏师范学院召开合作交流座谈会</a></p>
                  <p class="p2">9月5日下午，印度国家信息技术学院（NIIT）·宁夏师范学院合作交流座谈会在宁夏师范学院古雁校区办...</p>
                  <p class="p3">所属分类：<span>学院动态</span><span class="jj">来源：NIIT重庆互联网学院</span></p>
                </li>
                <li>
                  <p class="p1"><a href="./xinwen/1057.html">NIIT与贵州大学签订校企合作协议</a></p>
                  <p class="p2">5月27日，2019中国国际大数据产业博览会“中印IT＆DT产业合作发展”论坛在贵阳举行...</p>
                  <p class="p3">所属分类：<span>学院动态</span><span class="jj">来源：NIIT重庆互联网学院</span></p>
                </li>
                <li>
                  <p class="p1"><a href="./xinwen/1058.html">NIIT与宁夏师范学院签署合作办学协议</a></p>
                  <p class="p2">5月7日，印度国家信息技术学院（简称NIIT）与宁夏师范学院在宁夏教育厅签署两校联合培养优秀的信息技术人才的...</p>
                  <p class="p3">所属分类：<span>学院动态</span><span class="jj">来源：NIIT重庆互联网学院</span></p>
                </li>
              </ul>
              <div class="btn fr"><a href="./xinwen.html">点击查看更多</a></div>
            </div>
            <div class="right fl">
              <ul>
                <li>
                  <a href="./xinwen/1060.html">
                    <img src="./images/shouye-1.jpg" alt="" />
                    <div>
                      <p>刘慧会见印度国家信息技术学院代表团一行</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="./xinwen/1061.html">
                    <img src="./images/shouye-2.jpg" alt="" />
                    <div>
                      <p>NIIT全球首席执行官访问宁夏大学并与学生座谈</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="./xinwen/1063.html">
                    <img src="./images/shouye-3.jpg" alt="" />
                    <div>
                      <p>NIIT项目鼎力合作，人才培养举足轻重</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import $ from 'jquery'
import '../../js/listScroll'
import NumberScroll from './NumberScroll'
import listScroll from './ListScroll'

export default {
  name:'Index',
  components:{
    NumberScroll,
    listScroll,
  },
  mounted(){
    //视频播放控制
    $(".fake-layer").click(function () {
      $(this).hide();
      $(".my-video").show();
      $("#video")[0].play();
    });
    //数字滚动
    $("#data").Scroll({
      line: 1,
      speed: 500,
      timer: 2500
    });
    $(".emplyoee").Scroll({
      line: 1,
      speed: 500,
      timer: 2000
    });
      //切换图片
    $("#opt").click(
      function (e) {
        var index = $(e.target).index();
        var pic = $("#pic").find(".xuexiao")
        $(this).find("span").removeClass("active");
        $(e.target).addClass("active");
        pic.hide();
        $(pic[index]).show()
      }
    )
  },
}
</script>

<style lang="less" scoped>
 
  .banner {
    width : 1200px;
    margin: auto;
  }
  
  .section {
    .title {
      font-size  : 24px;
      font-family: "Microsoft YaHei";
      color      : rgb(96, 96, 96);
      font-weight: bold;
      line-height: 1.511;
      text-align : center;
      position   : relative;
  
      &:after {
        content         : '';
        position        : absolute;
        bottom          : -10px;
        background-color: #22a0ff;
        width           : 48px;
        height          : 3px;
        left            : 0;
        right           : 0;
        margin          : auto;
      }
  
      span {
        font-size  : 16px;
        font-weight: normal;
        font-family: "Microsoft YaHei";
        color      : rgb(132, 132, 132);
        line-height: 2.266;
        text-align : center;
        position   : relative;
  
        &:before,
        &:after {
          content         : '';
          display         : block;
          position        : absolute;
          top             : 11px;
          background-color: rgb(191, 191, 191);
          width           : 208px;
          height          : 1px;
        }
  
        &:before {
          left: -231px;
        }
  
        &:after {
          right: -231px;
        }
      }
    }
  }
  
  .cool {
    border-radius      : 9px;
    background-color   : #ffffff;
    -webkit-box-shadow : 0px 2px 13px 0px rgba(127, 127, 127, 0.26);
    box-shadow         : 0px 2px 13px 0px rgba(127, 127, 127, 0.26);
    width              : 819px;
    height             : 75px;
    margin             : 0 auto;
    position           : relative;
    top                : -39px;
    padding            : 7px 0 5px 0;
    background-image   : url("./images/xuanchuan.png");
    background-position: right;
    background-repeat  : no-repeat;
  
    ul li {
      width   : 170px;
      position: relative;
  
      p {
        margin    : 0 auto;
        text-align: center;
        font-size : 14px;
        color     : #6d6d6d;
  
        &:first-child {
          font-size: 28px;
          color    : #ff7c48;
        }
  
        &:first-child span:last-child {
          font-size: 16px;
        }
      }
  
      &:not(:last-child):after {
        content          : '';
        width            : 5px;
        height           : 86px;
        position         : absolute;
        right            : 0;
        background-repeat: no-repeat;
        top              : -6px;
        background       : url(./images/line.png);
      }
    }
  }
  
  .section1 {
    padding-top     : 20px;
    padding-bottom  : 50px;
    background-color: #f4f8fb;
  
    .content {
      width : 1200px;
      margin: 50px auto 18px auto;
  
      .box1 {
        width : 512px;
        height: 290px;
  
        .video-box {
          position: relative;
        }
  
        .my-video {
          display: none;
        }
  
        .fake-layer {
          position: absolute;
          left    : 0;
          top     : 0;
          cursor  : pointer;
          height: 290px;
          .snapshot {
            width : 100%;
            height: 100%;
          }
  
          .play-button {
            position: absolute;
            display : block;
            left    : 0;
            top     : 0;
            right   : 0;
            bottom  : 0;
            margin  : auto;
          }
  
          .text {
            width           : 100%;
            position        : absolute;
            bottom          : 0px;
            background-image: linear-gradient(0deg, rgba(42, 42, 42, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
            background-image: -moz-linear-gradient(0deg, rgba(42, 42, 42, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
            background-image: -webkit-linear-gradient(0deg, rgba(42, 42, 42, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
            background-image: -ms-linear-gradient(0deg, rgba(42, 42, 42, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
            height          : 51px;
  
            span {
              text-shadow: 0px 0 7px #000000;
              margin-left: 30px;
              font-size  : 16px;
              color      : #fff;
              line-height: 51px;
            }
          }
        }
      }
  
      .box2 {
        width: 642px;
  
        a {
          font-size  : 14px;
          font-family: "Microsoft YaHei";
          color      : rgb(34, 160, 255);
          line-height: 2.304;
          position   : absolute;
          right      : 13px;
          top        : 2px;
        }
  
        .intro-title {
          padding-left: 20px;
          position    : relative;
  
          &:before {
            content   : '';
            width     : 3px;
            height    : 40px;
            position  : absolute;
            left      : 0;
            bottom    : 2px;
            background: #bfbfbf;
          }
  
          p {
            font-size  : 13px;
            font-family: "Microsoft YaHei";
            color      : rgb(179, 179, 179);
          }
  
          :first-child {
            font-size  : 20px;
            font-family: "Microsoft YaHei";
            color      : rgb(34, 160, 255);
            font-weight: bold;
          }
        }
  
        .intro-content {
          text-align : justify;
          font-size  : 16px;
          font-family: "Microsoft YaHei";
          color      : rgb(97, 97, 97);
          line-height: 2.016;
          text-indent: 20px;
          margin-top : 15px;
        }
      }
    }
  }
  
  .section2 {
    margin-top: 33px;
  
    .content {
      width : 1200px;
      margin: 52px auto 20px auto;
  
      .left {
        .emply-head {
          position        : relative;
          z-index         : 20;
          background-color: rgb(89, 194, 255);
          box-shadow      : 0px 0px 5px 0px rgba(0, 0, 0, 0.47);
          width           : 691px;
          height          : 47px;
  
          li {
            text-align : center;
            line-height: 47px;
            position   : relative;
            float      : left;
            width      : 8%;
            font-size  : 14px;
            font-family: "Microsoft YaHei";
            color      : rgb(255, 255, 255);
            font-weight: bold;
  
            &:not(:last-child):after {
              content         : '';
              width           : 1px;
              height          : 15px;
              position        : absolute;
              background-color: #fff;
              right           : 0;
              top             : 0;
              bottom          : 0;
              margin          : auto;
            }
          }
        }
  
        .emplyoee {
          height  : 396px;
          overflow: hidden;
        }
  
        .emply-body {
          width        : 691px;
          // position  : relative;
          border-radius: 4px;
          margin-top   : 0;
  
          // transition: all 0.6s ease;
          li {
            background-color: rgb(248, 248, 248);
  
            &:after {
              content: '';
              clear  : both;
              display: block;
              height : 0;
            }
  
            span {
              text-align : center;
              line-height: 44px;
              position   : relative;
              float      : left;
              width      : 8%;
              font-size  : 14px;
              font-family: "Microsoft YaHei";
              color      : rgb(109, 109, 109);
            }
  
            // &:nth-child(even) {
            //   background-color: #ececec;
            // }
          }
  
        }
      }
  
      .mid {
        width        : 298px;
        margin-left  : 10px;
        border-radius: 3px;
        overflow     : hidden;
  
        .head {
          height          : 147px;
          background-color: #ffba58;
  
          p {
            padding-top: 42px;
            text-align : center;
            color      : #fff;
            font-weight: bold;
            font-size  : 24px;
          }
  
          .more {
            a {
              color: #ffba58;
            }
  
            background-color: #fff;
            width           : 100px;
            height          : 33px;
            font-size       : 14px;
            font-weight     : normal;
            line-height     : 33px;
            padding-top     : 0;
            margin          : auto;
            border-radius   : 23px;
            margin-top      : 15px;
          }
        }
  
        .data {
          height   : 295px;
          overflow : hidden;
          font-size: 14px;
  
          li {
            height          : 37px;
            line-height     : 35px;
            text-align      : center;
            color           : #696968;
            background-color: #f5f8fa;
          }
  
          p {
            float: left;
  
            &:nth-child(1) {
              width: 20%;
            }
  
            &:nth-child(2) {
              width: 58%;
            }
  
            &:nth-child(3) {
              width: 19%;
              color: #fe636b;
            }
          }
        }
      }
  
      .right {
        width        : 191px;
        margin-left  : 10px;
        border-radius: 3px;
        overflow     : hidden;
  
        .head {
          height          : 48px;
          background-color: #59c2ff;
          font-size       : 16px;
          font-weight     : bold;
          color           : #FFF;
          position        : relative;
          padding-left    : 25px;
          line-height     : 48px;
  
          &:before {
            content         : '';
            width           : 2px;
            height          : 19px;
            background-color: #d2d2d2;
            position        : absolute;
            left            : 8px;
            top             : 0;
            bottom          : 0;
            margin          : auto;
          }
        }
  
        .body {
          background-color: #f5f8fa;
          padding-top     : 15px;
          padding-bottom  : 3px;
  
          >div {
            width           : 160px;
            height          : 102px;
            margin          : 0 auto 10px auto;
            border-radius   : 2px;
            padding         : 7px;
            background-color: #fff;
            box-shadow      : 0 0 3px #56555538;
            cursor          : pointer;
  
            img {
              width : 160px;
              height: 82px;
            }
  
            .p1 {
              float: left;
  
            }
  
            .p2 {
              float: right;
            }
          }
        }
      }
    }
  }
  
  .section3 {
    background-color: #f1f1f1;
    padding-top     : 39px;
    padding-bottom  : 70px;
  
    .opt {
      margin    : auto;
      margin-top: 54px;
      width     : 450px;
  
      .active {
        background-color: #619fff;
        color           : #fff;
        border-radius   : 30px;
      }
  
      span {
        cursor     : pointer;
        float      : left;
        width      : 130px;
        height     : 45px;
        line-height: 45px;
        text-align : center;
        font-size  : 14px;
        margin     : 0 10px;
      }
    }
  
    .pic {
      width     : 1048px;
      height    : 297px;
      margin    : auto;
      overflow  : hidden;
      margin-top: 67px;
  
      img {
        transition: all ease 0.6s;
      }
  
      img:hover {
        transform: scale(1.1);
      }
  
      .big {
        width   : 424px;
        height  : 297px;
        overflow: hidden;
  
        img {
          width : 100%;
          height: 100%;
        }
      }
  
      .small {
        width      : 614px;
        height     : 297px;
        overflow   : hidden;
        margin-left: 10px;
  
        >div {
          overflow     : hidden;
          width        : 195px;
          height       : 145px;
          margin-right : 9px;
          margin-bottom: 6px;
          float        : left;
        }
  
        img {
          width : 195px;
          height: 145px;
        }
      }
    }
  }
  
  .section4 {
    padding: 50px 0 80px 0;
  
    .news {
      width     : 1068px;
      margin    : auto;
      margin-top: 60px;
  
      .left {
        width: 800px;
        .btn{
          width: 180px;
          text-align: center;
          height: 56px;
          line-height: 56px;
          background: #eee;
          font-size: 15px;
          margin-top: 18px;
          border-radius: 4px;
          transition: all 0.3s ease;
          a{color: #676767;transition: all 0.3s ease;}
          &:hover{
            background-color: #ff0000;
            a{color: #fff;}
          }
        }
        ul li {
          height: 110px;
          padding: 14px;
          border-bottom: 1px solid #bfbfbf;
          border-radius: 4px;
          &:hover{
            background: #eee;
            border: none;
          }
          .p1 {
            font-size: 18px;
            margin-top: 15px;
            color    : #5d5d5d;
          }
          .p2 {
            font-size    : 14px;
            text-indent  : 20px;
            margin-top   : 14px;
            margin-bottom: 20px;
          }
          .p3 {
            color: #b9b9b9;
            span {
              color: #ff6161;
            }
            .jj{
              float: right;
              color: #929292;
            }
          }
        }
      }
      .right{
        width: 245px;
        margin-left: 15px;
        ul li{
          height: 140px;
          width: 245px;
          overflow: hidden;
          position: relative;
          margin-bottom: 15px;
          img{transition: all 0.5s ease;width: 100%;}
          img:hover{
            transform: scale(1.1);
          }
          div{
              background: -moz-linear-gradient( 0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
              background: -webkit-linear-gradient( 0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
              background: -ms-linear-gradient( 0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
              background: linear-gradient( 0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
              position: absolute;
              height: 25px;
              width: 100%;
              bottom: -2px;
              color: #fff;
              text-indent: 22px;
              line-height: 24px;
              &:before{
                content: '';
                width: 6px;
                height: 6px;
                background-color: #fff;
                position: absolute;
                left: 10px;
                bottom: 9px;
              }
          }
        }
      }
    }
  }

</style>