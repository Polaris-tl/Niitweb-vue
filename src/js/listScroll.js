import $ from 'jquery'

(function ($) {
  $.fn.extend({
    Scroll: function (opt) {
      //参数初始化
      if (!opt) opt = {};
      var _this = this.find("ul:first");
      var lineH = _this.find("li:first").height(), //获取行高
        line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
        speed = opt.speed ? parseInt(opt.speed, 10) : 500, //滚动速度（毫秒）
        timer = opt.timer ? parseInt(opt.timer, 10) : 3000; //滚动时间间隔（毫秒）
      if (line == 0) line = 1;
      var upHeight = 0 - line * lineH;
      var timerID = null;
      //滚动函数开始
      var scroll = function () {
        _this.animate({
          marginTop: upHeight
        }, speed, function () {
          for (let i = 1; i <= line; i++) {
            _this.find("li:first").appendTo(_this);
          }
          _this.css({
            marginTop: 0
          });
        });
      };
      // 鼠标事件绑定
      _this.hover(function () {
        clearInterval(timerID);
      }, function () {
        timerID = setInterval(scroll, timer);
      }).mouseout();
    }
  });
})($);