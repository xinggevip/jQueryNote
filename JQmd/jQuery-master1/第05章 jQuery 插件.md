# jQury插件

## 1.jQuery插件的网站

- http://plugins.jquery.com/  官网
- http://www.jq22.com/  jQuery插件库
- http://www.htmleaf.com/  jQuery之家
- http://www.jq-school.com/  jQuery-school

## 2.经典jQuery插件

##### ① select2  下拉框搜索插件

- 官网 https://select2.org/

- github http://github.com/select2/select2

- 用法

  ```javascript
  $(dom).select()
  $(dom).select({
  	width:,	// 宽度
  	data:,	// 对象数组
      ajax: { // 请求远程数据
          url: "http://localhost:3000/dizhi",
          dataType: "json",
          processResults: function (data) {
          console.log(data);
          return {
              results: data
          }
  	}       
  	placeholder: // 提示文字
      language: "zh-CN",//汉化
      allowClear: true//允许清空
  	...
  })
  ```

  

##### ② datetimepicker  时间日期插件

- github  https://github.com/xdan/datetimepicker

- 文档  https://xdsoft.net/jqplugins/datetimepicker/

- 用法

  ```javascript
  // 全局设置插件语言
  $.datetimepicker.setLocale("zh");
  // 调用插件
  $(dom).datetimepicker({
      datepicker:boolean,
      timepicker:,
      format:"Y-m-d H:i",
      val:,
      ...
  })
  ```

##### ③ fullpage  全屏滚动插件

- 官网  https://alvarotrigo.com/fullPage/zh/

- github  https://github.com/alvarotrigo/fullpage.js/

- 用法

  ```html
  <!-- HTML部分 -->
  <div id="fullpage">
      <div class="section"></div>
      <div class="section">
          <div class="slide"></div>
          <div class="slide"></div>
          <div class="slide"></div>
      </div>
      <div class="section"></div>
      <div class="section"></div>
  </div>
  <!-- 自定义导航 写在包裹元素的外面 -->
  
  <!-- JS部分 -->
  <script>
  	$("#fullpage").fullpage({
          navigation: true,  // 显示圆点
          sectionsColor : ['orange', 'skyblue','pink','#369'],  // 背景色
          navigationTooltips: ['第一页','第二页','第三页','第四页'],  // 提示
          anchors:['one', 'two','there','four'],  // 锚点链接
          ...
      })
  </script>
  ```

##### ④ lazyload  图片懒加载

- 官网   https://appelsiini.net/projects/lazyload/
- github  https://github.com/tuupola/jquery_lazyload/tree/2.x

- 用法

  ```javascript
  $("dom).lazyload();
  //或不用jquery，给每个图片加上class="lazyload"，lazyload();
  ```

##### ⑤ layer  弹窗插件

- 官网  http://layer.layui.com/?alone

- github  https://github.com/sentsin/layer/

  ```javascript
  layer.alert()
  layer.confirm()
  layer.msg()
  layer.tips()
  layer.load()
  layer.close()
  layer.open({
  	type: ,
  	title: ,
  	content: , // type默认0的时候可以加文字和标签，type为1的时候可以是网址
  	area:["500px","300px"], // 弹框大小
      shadeClose: true    // 点遮罩层就可以关闭
      ...
  })
  ...
  ```

##### ⑥ nice validator

- 官网  https://validator.niceue.com/

- github  https://github.com/niceue/nice-validator

- 用法

  ```javascript
  $("#loginForm").validator({
      fields:{
          email:"required,email",
          pwd:{
              rule: "required,length(6~12)",
              msg: "密码error",
              ok: "密码success",
              tip: "Place input psd"
          },
          repwd:"match(pwd)"
      }
  })
  ```

##### ⑦  jQuery-easing

- 官网  http://gsgd.co.uk/sandbox/jquery/easing/

- github  http://github.com/gdsmith/jquery.easing

- 用法

  ```javascript
  $(document).ready(function (){
      $("#btn").click(function (){
          $("#box").slideToggle(2000,"easeInExpo",function (){
              console.log("toogle");
          })
      })
      
  })
  ```

##### ⑧  自定义插件

- 给jQuery本身扩展方法

  ```javascript
  $.extend({
      sayHello:function (name){
          console.log("你好啊" + name);
      }
  });
  ```

- 给jQueryDom对象扩展方法

  ```javascript
  $.fn.extend({
      changeRed:function (){
          $(this).css("color","red")
      }
  });
  ```

  ```
  $.fn.方法名 = function (){...}
  ```

- 封装结构

  ```
  （function （$）{...}）（jQuery）
  ```

  